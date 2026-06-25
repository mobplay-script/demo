/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pelayaran laut → rempah (sea-to-spice voyage)
        abyss: '#081826', // laut dalam (primary dark)
        deep: '#0C2A3A', // panel laut
        sea: '#103B4E',
        teal: { DEFAULT: '#1B7A8C', light: '#3FA7B8', dark: '#125968' },
        amber: { DEFAULT: '#E0A23B', light: '#F0C173', dark: '#C2842A' }, // kunyit
        clove: { DEFAULT: '#C4502A', dark: '#9E3D1F' }, // cengkih / kayu manis
        sand: { DEFAULT: '#F4EEE2', deep: '#E9DFC9' }, // burlap / kertas
        ink: '#20160F',
        mist: '#9FB3BD', // teks redup di atas gelap
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
