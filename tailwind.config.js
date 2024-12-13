// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography"), require("daisyui")],
//   daisyui: {
//     themes: ["cupcake"],
//   },
// };
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  plugins: [typography, daisyui],
};
