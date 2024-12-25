/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary': '#4338ca',
      'dark-primary': '#312e81',
      'dark': '#1a202c',
      'white': '#ededed',
      'light-gray': '#546678',
      'black' : '#191919',
      'red-50'  : '#fef2f2',
      'red-100' : '#fee2e2',
      'red-200' : '#fecaca',
      'red-300' : '#fca5a5',
      'red-400' : '#f87171',
      'red-500' : '#ef4444',
      'red-600' : '#dc2626',
      'red-700' : '#b91c1c',
      'red-800' : '#991b1b',
      'red-900' : '#7f1d1d',
      'red-950' : '#6b1e1e',
      'orange-50' : '#fff7ed',
      'orange-100': '#ffedd5',
      'orange-200': '#fed7aa',
      'orange-300': '#fdba74',
      'orange-400': '#fb923c',
      'orange-500': '#f97316',
      'orange-600': '#ea580c',
      'orange-700': '#c2410c',
      'orange-800': '#9a3412',
      'orange-900': '#7c2d12',
      'orange-950': '#6d2f2f',
      'sky-50' : '#f0f9ff',
      'sky-100': '#e0f2fe',
      'sky-200': '#bae6fd',
      'sky-300': '#7dd3fc',
      'sky-400': '#38bdf8',
      'sky-500': '#0ea5e9',
      'sky-600': '#0284c7',
      'sky-700': '#0369a1',
      'sky-800': '#075985',
      'sky-900': '#0c4a6e',
      'sky-950': '#0d4f6e',
    },
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
      },
    }
  },
  plugins: [],
};
