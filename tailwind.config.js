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
        float:{
          '0%':{transform:'translateY(-20px)'},
          '50%':{transform:'translateY(20px)'},
          '100%':{transform:'translateY(-20px)'}
        }
      },
      animation:{
        float : 'float 5s infinite ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};
