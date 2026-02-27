import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Montserrat"', 'sans-serif'],
                script: ['"Campana Script"', '"Quivert"', '"Qwitcher Grypen"', '"Great Vibes"', 'cursive'],
            },
            colors: {
                background: "#061320",
                foreground: "#ffffff",
                astrideBlack: "#061320",
                astrideMagenta: "#FF00FF",
                astrideCyan: "#00FFFF",
                astrideGold: "#F9A826",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                dark: {
                    colors: {
                        background: "#061320", // Deep slate background
                        foreground: "#ffffff",
                        primary: {
                            DEFAULT: "#F9A826", // Warm gold
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "#FF00FF", // Magenta
                            foreground: "#FFFFFF",
                        },
                        success: {
                            DEFAULT: "#00FFFF", // Cyano
                            foreground: "#000000",
                        },
                    }
                },
                light: {
                    colors: {
                        background: "#061320",
                        foreground: "#ffffff",
                        primary: {
                            DEFAULT: "#F9A826",
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "#FF00FF",
                            foreground: "#FFFFFF",
                        },
                    }
                }
            }
        })
    ],
}
