module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'ssm':'400px',
        'sm': '768px',
        'md': '1024px',
         
        'lg': '1280px',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

};
