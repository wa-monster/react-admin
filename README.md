# YANG-ADMIN 项目简介

使用 react+webpack 构建的一个后台管理系统

### 技术栈

- 核心-react(18.x)+ typescript(4.9.x) + react-router(6.x)+ mobx(6.x)
- ui 框架-antd:5.x
- 国际化-i18next:23.x
- css-tallwindcss+less+cssModules
- 包管理器- pnpm
- 构建-webpack

### 插件

- 常用工具库-lodash:4.x,ahooks:3.x
- 背景动画：particles-bg
- 动态添加多个类名：classname

### 使用

```js
# 安装依赖
pnpm install

# 开发环境启动
pnpm run start

# 生产环境打包
pnpm run build
```

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

### 使用 husky + commit-lint + lint-staged

- pnpm add husky @commitlint/cli @commitlint/config-conventional lint-staged -D
- ```
  pkg.json 的script里面添加命令 prepare 是npm下载前的生命周期钩子
  //package.json
  "scripts": {
      "prepare": "husky install",
  },
  // 然后运行
  npm run prepare
  ```

* 执行成功后会在根目录下生成 .husky 目录 目录里面有个 `_` 目录 不用管它

配置 commitlint
根目录下新建 `commitlintrc.js`,填入如下内容

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修复bug
        'docs', // 修改文档
        'style', // 修改代码格式，不影响代码逻辑
        'refactor', // 代码重构，理论上不影响功能逻辑
        'test', // 修改测试用例
        'build', // 构建或其他工具的变动(如webpack)
        'revert', // 还原以前的提交
        'merge', // 分支代码合并
      ],
    ],
  },
};
```

然后执行命令 `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'`
这样会在`.husky`目录下新建一个`commit-msg` git hooks
这样就可以实现 commit 的时候填写的 msg 要求要有规范了，具体规范 `type: 内容`

配置检查 eslint
执行命令 `npx husky add .husky/pre-commit "npx eslint src`
这样会在`.husky`目录下新建一个`pre-commit` git hooks
这样就可以实现 commit 前 检查是否符合 eslint

配置 lint-staged
如果直接 npx eslint src 会检查 src 下的所有文件，我们可以通过 lint-staged 只检查要提交的部分的文件
根目录新建 `.lintstagedrc.json`，内容如下

```
{
  "*.{js,jsx,vue,ts}": ["eslint src"]
}
```

然后找到 `.husky`下的`pre-commit` 把里面的 `npx eslint src` 替换为 `npx lint-staged`
就可以了

### 页面样式参考

- React-Admin https://isluo.com/work/admin/
- 若依后台管理框架 http://vue.ruoyi.vip/index
- ant-design-pro https://preview.pro.ant.design/dashboard/analysis/

10-23
完成 logo 和菜单
10-31
把个人弄出来

11-6
菜单默认选择有问题，记得改
