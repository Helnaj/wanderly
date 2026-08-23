/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./*.html",
        "./src/**/*.js"
    ],

    theme: {
        extend: {
            colors: {
                wanderly: {
                    50: "#eef8f3",
                    100: "#d9f0e5",
                    200: "#b9e3d0",
                    500: "#208b67",
                    600: "#176c50",
                    700: "#125640",
                    900: "#17221c"
                }
            },

            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
                display: ["Playfair Display", "serif"]
            },

            boxShadow: {
                card: "0 10px 35px rgba(20, 50, 35, 0.08)"
            }
        }
    },

    plugins: []
};