/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          accent: '#10b981',
          deep: '#0f172a'
        }
      },
      boxShadow: {
        neo: '8px 8px 18px rgba(15, 23, 42, 0.12), -8px -8px 18px rgba(255, 255, 255, 0.72)',
        glass: '0 10px 30px rgba(37, 99, 235, 0.2)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
