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

  ### cra 创建的 react 项目配置 eslint

  - pnpm add eslint
  - 安装完后 ./node_modules/.bin/eslint --init 进行配置
  - 配置会要求你选择一些基础选项，这是我的选择
  - How would you like to use ESLint? · problems
  - What type of modules does your project use? · esm
  - Which framework does your project use? · react
  - Does your project use TypeScript? · No / Yes
  - Where does your code run? · browser
  - What format do you want your config file to be in? · JavaScript
  - Would you like to install them now? · No / Yes
  - Which package manager do you want to use? · pnpm
    你也可以根据自己的情况进行配置
    配置完后基础的配置就完成了
    然后在 vscode 里面安装 eslint 插件和 Prettier - Code formatter 插件
    然后在 tsx 文件里面 选择 使用。。。格式化文档 设置默认格式化程序为 Prettier
    就完成了配置
