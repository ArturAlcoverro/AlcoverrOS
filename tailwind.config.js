/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        divider: 'var(--divider)',
        font: 'var(--font)',
        accent: 'var(--accent)',
        fontSecondary: 'var(--font-secondary)',
        background: 'var(--background)',
        backgroundOpaque: 'var(--background-opaque)',
        backgroundSecondary: 'var(--background-secondary)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}


