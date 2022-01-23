module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                theme: '#EFD0CA',
            },
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui'],
                serif: ['ui-serif', 'Georgia'],
                mono: ['ui-monospace', 'SFMono-Regular'],
                inter: ["'Inter'", 'sans-serif'],
                'dm-serif': ["'DM Serif Text'", 'serif'],
            },
        },
    },
    plugins: [],
}
