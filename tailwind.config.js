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
      'indigo-50' : '#eef2ff',
      'indigo-100': '#e0e7ff',
      'indigo-200': '#c7d2fe',
      'indigo-300': '#a5b4fc',
      'indigo-400': '#818cf8',
      'indigo-500': '#6366f1',
      'indigo-600': '#4f46e5',
      'indigo-700': '#4338ca',
      'indigo-800': '#3730a3',
      'indigo-900': '#312e81',
      'pink-50'  : '#fdf2f8',
      'pink-100' : '#fce7f3',
      'pink-200' : '#fbcfe8',
      'pink-300' : '#f9a8d4',
      'pink-400' : '#f472b6',
      'pink-500' : '#ec4899',
      'pink-600' : '#db2777',
      'pink-700' : '#be185d',
      'pink-800' : '#9d174d',
      'pink-900' : '#831843',
      'dark': '#1a202c',
      'white': '#ededed',
      'light-gray': '#546678',
    },
    extend: {
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
      },
    }
  },
  plugins: [],
};
