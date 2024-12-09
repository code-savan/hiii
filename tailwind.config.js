/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        animation: {
            scroll: 'scroll 12s linear infinite',
            'scroll-down': 'scroll-down 12s linear infinite',
            scaleSequence: 'scaleSequence 3.5s ease-in-out infinite',
          },
          keyframes: {
            scroll: {
              from: { transform: 'translateY(0)' },
              to: { transform: 'translateY(-50%)' },
            },
            'scroll-down': {
              from: { transform: 'translateY(-50%)' },
              to: { transform: 'translateY(0)' },
            },
            scaleSequence: {
                '0%': { transform: 'scale(1)' },        // Start normal
                '20%': { transform: 'scale(0.8)' },    // Scale down
                '40%': { transform: 'scale(1)' },      // Back to normal
                '60%': { transform: 'scale(0.8)' },    // Scale down again
                '80%': { transform: 'scale(1)' },      // Back to normal
                '100%': { transform: 'scale(1)' },     // Pause moment (no change)
              },
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
