/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    // screens: {
    //   "3xl": "2180px",
    //   // => @media (min-width: 640px) { ... }

    //   "4xl": "2560px",
    //   // => @media (min-width: 1024px) { ... }
    // },
    extend: {
      // fontSize: {
      //   sm: "14px", //@media (min-width: 640px) { ... }
      //   base: "16px", //@media (min-width: 768px) { ... }
      //   lg: "18px", //@media (min-width: 1024px) { ... }
      //   xl: "20px", //@media (min-width: 1280px) { ... }
      //   "2xl": "22px", //@media (min-width: 1536px) { ... }
      //   "3xl": "24px", //@media (min-width: 2180px) { ... }
      //   "4xl": "26px", //@media (min-width: 2560px) { ... }
      // },
    },
  },
  plugins: [],
  // 禁止tailwindcss的默认属性 解决tailwind和antd的样式冲突
  corePlugins: {
    preflight: false,
  },
};
