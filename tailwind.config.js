/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        heading:['Nunito Sans'],
        body:['DM Sans']
      },
      keyframes:{
        move:{
          '0%':{transform:'translate(0px,300px)'},
          '100%':{transform:'translate(1500px,300px)'}
        }
      },
      animation:{
        move : 'move 5s infinite ease-in-out',
      }
    },
  },
  plugins: [],
};
