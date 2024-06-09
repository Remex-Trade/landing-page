const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "md":"768px",
      "sc1":"1024px",
      "sc2":"1440px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        heading:['Nunito Sans'],
        body:['DM Sans'],
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes:{
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animate"),
  ],
  darkMode:'class'
};
