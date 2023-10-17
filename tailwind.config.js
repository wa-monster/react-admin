/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // 禁止tailwindcss的默认属性 解决tailwind和antd的样式冲突
  corePlugins: {
    preflight: false,
  },
};
