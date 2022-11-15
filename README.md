# Poor UI

![GitHub package.json version](https://img.shields.io/github/package-json/v/DenghuaCN/poor-ui?style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/DenghuaCN/poor-ui/deploy%20poor-ui%20website/main?style=flat-square)
![vue version](https://img.shields.io/github/package-json/dependency-version/DenghuaCN/poor-ui/dev/vue?style=flat-square)
![vite version](https://img.shields.io/github/package-json/dependency-version/DenghuaCN/poor-ui/dev/vite?style=flat-square)
![NPM](https://img.shields.io/npm/l/poor-ui?style=flat-square)

## 介绍

基于 `Vue3` 及 `TypeScript` 的组件库， 具有代码可读性高，组件源代码简洁等特点。本项目基于 `Vite3.x` 构建。

## 如何使用

### 安装

```
yarn add poor-ui
```

或

```
npm install poor-ui
```

### 引入 poor-ui

```
import { Button, Tabs, Switch, Dialog, openDialog } from "poor-ui";
import "poor-ui/dist/lib/poor-ui.css";
```

### 本项目使用

- 官网本地运行
  - `yarn` 安装依赖
  - `yarn dev` 运行
- 组件打包，基于 rollup
  - `yarn build:lib`
- 自动生成 changelog，基于 conventional-changelog
  - `yarn changelog`

### 自动化

本项目基于 Github Actions，实现了一系列自动化脚本：
- 自动化构建官网（依赖 gh-pages）
  - `main-deploy`
  - 新代码 push 到 main 分支上，自动构建官网并发布到 gh-pages。
- 自动化发布 npm 包
  - `publish`
  - 创建新的 release，自动将最新的包发布到 npm。

## 文档

要查看实时示例和详细的组件文档，请访问[文档](https://denghuacn.github.io/poor-ui/#/)。

## 变更记录

[CHANGELOG](https://github.com/DenghuaCN/poor-ui/blob/main/CHANGELOG.md) 中记录了每个发行版的详细更改。

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 DenghuaCN
