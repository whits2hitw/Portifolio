/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': 'var(--neon-purple)',
        'neon-blue': 'var(--neon-blue)',
        'neon-green': 'var(--neon-green)',
      },
    },
  },
  plugins: [],
};
