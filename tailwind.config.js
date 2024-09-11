/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)'},
        }
      },
      boxShadow: {
        header: "0px 2px 4px -1px rgba(0, 0, 0, 0.013), 0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0)",
        card: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Pretendard: ["Pretendard Variable", "Pretendard", "Noto Sans KR"],
      },
      colors: {},
    },
  },
  plugins: [],
};
