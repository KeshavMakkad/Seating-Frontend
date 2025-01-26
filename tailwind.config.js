/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include your React files
        "./public/index.html",
        "./src/*.{js,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
