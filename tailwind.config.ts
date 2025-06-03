import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Pastel French Classical Palette
                cream: '#F8F6F0',
                sage: {
                    50: '#f6f7f6',
                    100: '#e1e5e1',
                    200: '#c5d1c5',
                    300: '#B8C5B8',
                    400: '#9bb09b',
                    500: '#7e957e',
                    600: '#657a65',
                    700: '#526352',
                    800: '#435043',
                    900: '#384238',
                },
                dustyRose: {
                    50: '#fdf2f3',
                    100: '#fce7e8',
                    200: '#f9d2d5',
                    300: '#E8B4B8',
                    400: '#f092a1',
                    500: '#e36d7a',
                    600: '#d04858',
                    700: '#b53b4a',
                    800: '#973344',
                    900: '#7f2d3f',
                },
                lavender: {
                    50: '#f9f7fd',
                    100: '#f4f0fb',
                    200: '#ebe4f7',
                    300: '#D4C5E8',
                    400: '#c9b5e0',
                    500: '#b899d4',
                    600: '#a478c2',
                    700: '#8e5fa5',
                    800: '#755087',
                    900: '#61426e',
                },
                warmBeige: {
                    50: '#fdfcf8',
                    100: '#faf7ed',
                    200: '#f4edd8',
                    300: '#E8DCC0',
                    400: '#ddc89f',
                    500: '#d1b176',
                    600: '#c39c5e',
                    700: '#a1804f',
                    800: '#836845',
                    900: '#6c5639',
                },
                mutedGold: {
                    50: '#fdfcf7',
                    100: '#faf6ea',
                    200: '#f3ebca',
                    300: '#D4C5A9',
                    400: '#e0d18b',
                    500: '#d4bd65',
                    600: '#c4a53d',
                    700: '#a38632',
                    800: '#866b2e',
                    900: '#6f592b',
                }
            }, fontFamily: {
                'serif': ['var(--font-lobster)', 'Lobster', 'Georgia', 'serif'],
                'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8f6f0' opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
