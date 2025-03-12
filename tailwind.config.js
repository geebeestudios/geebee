/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // include all files in the src folder
    ],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "serif"],
                albert: ["Albert Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
