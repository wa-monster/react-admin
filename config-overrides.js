const {
  override,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
  adjustStyleLoaders,
} = require("customize-cra");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // gzip压缩, 可以压缩js css
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const paths = require("react-scripts/config/paths");
paths.appBuild = path.join(path.dirname(paths.appBuild), "./yang-amdin.org");
//配置开发模式和打包模式
const addCustom = () => {
  return (config) => {
    if (process.env.NODE_ENV === "production") {
      config.devtool = false; //去除map文件// 关闭sourceMap

      // 配置打包后的文件位置
      // config.output.path = __dirname + "/dist";
      config.output.publicPath = "/yang-admin/";
      config.plugins = [
        ...config.plugins,
        new CompressionWebpackPlugin({
          test: /.js$|.css$/,
          threshold: 1024,
        }),
      ];
      const { promisify } = require("util");
      const chalk = require("chalk");
      const clear = require("clear");
      const figlet = promisify(require("figlet"));
      clear();
      const log = (content) => console.log(chalk.blue(content));
      figlet("YANG").then((res) => log(res));
    }
    return config;
  };
};

module.exports = override(
  // 配置别名
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  }),
  // 配置less
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: "[local]--[hash:base64:5]", // 自定义 CSS Modules 的 localIdentName
    },
  }),
  // 为了解决引入less报错
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  addCustom(),
  process.env.NODE_ENV === "production"
    ? addWebpackPlugin(
        new BundleAnalyzerPlugin({
          analyzerMode: "static", //输出静态报告文件report.html，而不是启动一个web服务
        })
      )
    : undefined
);
