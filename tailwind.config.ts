import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      black: "#0E121B",
      blue: {
        50: "#EBF1FF",
        500: "#335CFF",
        700: "#2547D0",
      },
      green: {
        50: "#E0FAEC",
        500: "#21C16B",
      },
      neutral: {
        50: "#F5F7FA",
        100: "#F3F5F8",
        200: "#E0E4EA",
        300: "#CACFD8",
        400: "#99A0AE",
        500: "#717784",
        600: "#525866",
        700: "#2B303B",
        800: "#232530",
        900: "#191B25",
        950: "#0E121B",
      },
      red: {
        50: "#FFEBEC",
        500: "#FB3748",
      },
      white: "#FFFFFF",
    },
    spacing: {
      0: "0",
      25: "0.125rem",
      50: "0.25rem",
      75: "0.375rem",
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      250: "1.25rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
      600: "3rem",
      800: "4rem",
      1000: "5rem",
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus-visible"]);
    }),
  ],
} satisfies Config;
