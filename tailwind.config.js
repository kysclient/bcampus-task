/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    darkMode: 'class',
    content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx', 'src/layout/**/*.tsx'],
    theme: {
        screens: {
            xs: '500px',
            ...defaultTheme.screens
        },
        extend: {
            fontFamily: {
                'pretendard': ['Pretendard', 'sans-serif'],
            },
            colors: {
                'main-primary': 'rgb(var(--main-primary) / <alpha-value>)',
                'main-secondary': 'rgb(var(--main-secondary) / <alpha-value>)',
                'main-background': 'rgb(var(--main-background) / <alpha-value>)',
                'main-search-background': 'rgb(var(--main-search-background) / <alpha-value>)',
                'main-sidebar-background': 'rgb(var(--main-sidebar-background) / <alpha-value>)',
                'main-accent': 'rgb(var(--main-accent) / <alpha-value>)',
                'accent-yellow': 'rgb(var(--accent-yellow) / <alpha-value>)',
                'accent-blue': 'rgb(var(--accent-blue) / <alpha-value>)',
                'accent-pink': 'rgb(var(--accent-pink) / <alpha-value>)',
                'accent-purple': 'rgb(var(--accent-purple) / <alpha-value>)',
                'accent-orange': 'rgb(var(--accent-orange) / <alpha-value>)',
                'accent-green': 'rgb(var(--accent-green) / <alpha-value>)',
                'accent-red': '#F4212E',
                'dark-primary': '#E7E9EA',
                'dark-secondary': '#71767B',
                'light-primary': '#0F1419',
                'light-secondary': '#536471',
                'dark-border': '#2F3336',
                'light-border': '#EFF3F4',
                'dark-line-reply': '#333639',
                'light-line-reply': '#CFD9DE',
                'image-preview-hover': '#272C30',
            }
        }
    },
    plugins: []
}
