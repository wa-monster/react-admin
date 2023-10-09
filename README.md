# 安装

- `pnpm -g add create-react-app` 安装脚手架
- `pnpm create react-app antd-demo --template typescript` 安装 ts 模板的 react

# 非 eject 配置 webpack

- `pnpm add react-app-rewierd customize-cra -D` 下载 react-app-rewierd 和 customize-cra
- 修改 pkg.json 的 script
  ```
  "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired test"
  },
  ```
- 根目录下新建 config-overrides.js 文件,写下如下基础代码，然后后续 webpack 配置就可以直接在 override 这里写了

  ```
  const { override } = require('customize-cra');

  module.exports = override({

  });
  ```
