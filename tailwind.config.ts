import type { Config } from 'tailwindcss'

const {colors : defaultColors} = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(7, 99%, 70%)",
      "200" : "hsl(51, 100%, 49%)",
      "300" : "hsl(167, 40%, 24%)",
      "400" : "hsl(198, 62%, 26%)",
      "500" : "rgba(144,212,197,255)",
      "600" : "hsl(212, 27%, 19%)",
      "700" : "hsl(213, 9%, 39%)",
      "800" : "hsl(232, 10%, 55%)",
      "900" : "hsl(210, 4%, 67%)",
      "1000" : "rgba(255,244,182,255)",
      "1100" : "rgba(254,221,214,255)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
      fontFamily : {
        'barlow': ['Barlow'],
        'fraunces': ['Fraunces'],
      }
    },
  },
  plugins: [],
}
export default config
