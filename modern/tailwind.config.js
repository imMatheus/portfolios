module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                theme: '#2266ff',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
