import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        theme: "#8338EC",
      },
    },
  },
  plugins: [],
};
export default config;
