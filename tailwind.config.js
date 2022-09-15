/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        112: "28rem",
        120: "30rem",
        124: "31rem",
        126: "31.5rem",
        128: "32rem",
        192: "48rem",
        208: "52rem",
      },
      width: {
        144: "36rem",
        240: "60rem",
      },
      inset: {
        "11px": "11px",
        "15px": "15px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      scale: ["focus-within"],
    },
  },
  plugins: [require("daisyui")],
};
