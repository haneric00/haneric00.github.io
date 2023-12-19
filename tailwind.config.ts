import type { Config } from 'tailwindcss';

import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      primary: colors.neutral,
      secondary: colors.blue,
      cyan: colors.cyan,
      indigo: colors.indigo,

    },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      // }
    },
  },
  plugins: [],
}

export default config


// import colors from "tailwindcss/colors";
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       primary: colors.neutral,
//       secondary: colors.blue,
//     },
//     extend: {},
//   },
//   plugins: [],
// };