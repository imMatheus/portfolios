module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui'],
                serif: ['ui-serif', 'Georgia'],
                mono: ['ui-monospace', 'SFMono-Regular'],
                piazzolla: ["'Piazzolla'", 'serif'],
                londrina: ["'Londrina Solid'", 'cursive'],
                marker: ["'Permanent Marker'", 'cursive'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
