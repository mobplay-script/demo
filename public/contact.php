<?php
/**
 * Pemroses Form Kontak — PT Cahayamas Jaya Raya
 * -------------------------------------------------------------
 * File ini diletakkan di public/ dan IKUT ter-build ke dist/ lalu
 * di-upload ke public_html. Berjalan di shared hosting standar (PHP 8).
 *
 * SETUP:
 * 1. composer require phpmailer/phpmailer   (folder vendor/ ikut di-upload)
 * 2. salin config.php.example -> config.php, isi kredensial SMTP email domain
 * 3. pastikan PHP 8+ aktif di cPanel
 */

declare(strict_types=1);

// Hanya terima POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /kontak/');
    exit;
}

/* ---------- Konfigurasi ---------- */
$config = [
    // Tujuan email masuk
    'to'        => 'info@cahayamasjayaraya.co.id',
    'to_name'   => 'PT Cahayamas Jaya Raya',
    // Kredensial SMTP (akun email domain dari cPanel). Override via config.php.
    'smtp_host' => 'mail.cahayamasjayaraya.co.id',
    'smtp_user' => 'info@cahayamasjayaraya.co.id',
    'smtp_pass' => '',          // ISI di config.php, JANGAN commit ke Git
    'smtp_port' => 587,
    'smtp_secure' => 'tls',     // 'tls' (587) atau 'ssl' (465)
];
if (is_file(__DIR__ . '/config.php')) {
    $config = array_merge($config, require __DIR__ . '/config.php');
}

/* ---------- Helper redirect ---------- */
function kembali(string $status): never
{
    header('Location: /kontak/?status=' . $status);
    exit;
}

/* ---------- Anti-spam (honeypot) ---------- */
if (!empty($_POST['website'] ?? '')) {
    // Bot mengisi field tersembunyi -> anggap sukses diam-diam
    kembali('success');
}

/* ---------- Validasi & sanitasi ---------- */
$nama    = trim((string) ($_POST['nama'] ?? ''));
$email   = trim((string) ($_POST['email'] ?? ''));
$telepon = trim((string) ($_POST['telepon'] ?? ''));
$subjek  = trim((string) ($_POST['subjek'] ?? '')) ?: 'Pesan dari Website';
$pesan   = trim((string) ($_POST['pesan'] ?? ''));

if ($nama === '' || $pesan === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    kembali('error');
}

/* ---------- Kirim email via PHPMailer ---------- */
$autoload = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoload)) {
    error_log('contact.php: vendor/autoload.php tidak ditemukan. Jalankan composer require phpmailer/phpmailer');
    kembali('error');
}
require $autoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = (int) $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($config['smtp_user'], 'Website ' . $config['to_name']);
    $mail->addAddress($config['to'], $config['to_name']);
    $mail->addReplyTo($email, $nama);

    $mail->isHTML(true);
    $mail->Subject = '[Website] ' . $subjek;
    $mail->Body = nl2br(htmlspecialchars(
        "Nama    : {$nama}\n" .
        "Email   : {$email}\n" .
        "Telepon : {$telepon}\n" .
        "Subjek  : {$subjek}\n\n" .
        "Pesan:\n{$pesan}",
        ENT_QUOTES,
        'UTF-8'
    ));
    $mail->AltBody = "Nama: {$nama}\nEmail: {$email}\nTelepon: {$telepon}\n\n{$pesan}";

    $mail->send();
    kembali('success');
} catch (Exception $e) {
    error_log('contact.php gagal kirim: ' . $mail->ErrorInfo);
    kembali('error');
}
