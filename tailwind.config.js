/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "md":"600px",
      "sc0":"750px",
      "sc1":"990px",
      "sc2":"1440px",
      "sc3":"2560px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        heading:['Nunito Sans'],
        body:['DM Sans'],
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes:{
        move:{
          '100%':{transform:'translateX(100%)'}
        },
        float:{
          '0%':{transform:'translateY(-20px)'},
          '50%':{transform:'translateY(20px)'},
          '100%':{transform:'translateY(-20px)'}
        },
        'infinite-scroll': {
          // from: { transform: 'translateX(0)' },
          // to: { transform: 'translateX(100%)' }
          '0%,100%':{transform:'translateX(0%)'},
          '50%':{transform:'translateX(100%)'},
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
        ,
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "50%":{
                width:"50%",
                visibility:"visible"

            },
            "100%": {
              width: "100%",
              visibility:"visible"
            }  
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }  
          }
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 15s linear infinite',
        move: 'move 1s ease-in-out  ',
        float : 'float 5s infinite ease-in-out',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
  darkMode:'class'
};
