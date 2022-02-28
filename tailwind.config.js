module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'BrBar': '#B06D52',
                'Grey': '#D9D9D9',
                'white': '#FFFFFF',
                'bb': '#412114',
                'backG': '#E1D7D4',
                'bottomS': '#BA6D57',
                'Bb': '#E3D7D1',
                'YY': '#FEB873',
                'BgPost': '#E2D9D4',
                'viewPost': '#EDC7A5',
                'textV': '#B7B7B7',
            },
            fontFamily: {
                body: ['Roboto']
            }
        },
    },
    plugins: [],
}