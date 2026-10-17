/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080E1A',
          navy: '#0F1A2E',
          navyLight: '#18263E',
          charcoal: '#1E293B',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          orange: '#FF5E14',
          orangeHover: '#E04800',
          amber: '#F59E0B',
          amberGold: '#D97706',
          slate: '#64748B',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
        'premium-hover': '0 25px 50px -12px rgba(255, 94, 20, 0.15), 0 0 1px 1px rgba(255, 94, 20, 0.2)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
