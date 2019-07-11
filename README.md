# React 构建PC端简书首页的前端项目

这个项目从2019年四月开始做的，经过一个多月才陆陆续续完成。因为是第一次写那么大的项目，而且对于react掌握程度有限，因此完成周期比较长。不过在实现途中收获了很多，比如在实现某些动画效果时，简单使用了 `CSStransition` ，写 UI 组件直接使用了 `styled-components` ，把 CSS 样式成为 React 的一个UI组件；代码优化时，使用 `PureComponent` 来代替使用 `componentShouldUpdata` 生命周期函数，最后还用到了 `react-router-dom` 提升页面体验，而且模拟了许多接口API，如：推荐信息、推荐用户、内容列表等。项目最重要的是使用 **`act + Redux`** 构建应用。redux 出色的状态管理使编写react变得简单并且容易管理。
用到的模块与版本：  
![各个模块](./img/模块.png)  

构建应用途中，大致使用了如下一些模块：

| 模块名称                     | 描述                       |
| ------------------------ | ------------------------ |
| `react`                  | 基础模块                     |
| `react-redux`            | 更好的管理react状态             |
| `react-router-dom`       | react 前端路由               |
| `redux-thunk`            | 更好的管理异步请求                |
| `redux-immutable`        | 用于数据管理                   |
| `styled-components`      | 一个适合 react 的 CSS in JS 库 |
| `react-transition-group` | 在react应用中可以更加方便实现动画效果    |
| `axios`                  | 用于异步请求的库                 |

初始构建项目时，直接使用了 `create-react-app` ，减少了配置的繁琐。

项目目录：  
![img\项目目录](./img/项目目录.png)

目录说明：

| 名称          | 描述                      |
| ----------- | ----------------------- |
| common 文件夹  | 通用的 react 组件集合          |
| pages 文件夹   | 存放着home页、详情页和登陆页面       |
| store 文件夹   | 最外层的数据管理文件              |
| style.js 文件 | 全局的 CSS 样式组件            |
| img 文件夹     | 存放项目文档（README.md）中用到的图片 |

其它的文件或文件夹均是使用 react 脚手架工具自动生成的。
一共做了五个大的模块，分别是：  
|模块名称|描述|
|----|-----|
| Header 模块 | 通用的头部导航模块 |
| Detail 模块 | 文章详情页模块 |
| Home 模块 | 首页模块 |
| Login 模块 | 登录与注册模块 |
| Write 模块 | 写文章模块 |  
除了 Header 模块外，其他的模块都是一个页面。在整体大的模块里，又有小的模块，存放于各个模块文件夹里的 `components` 文件夹下。  
这次的实践，让我学到了许多react开发的技巧以及不同功能的代码逻辑如何实现，比如：首页用了很多分页功能，在数据获取到之后，如何实现分页功能；在 React 中如何实现过渡动画；登录、注册功能的实现；在 React + redux 开发环境中，如何请求数据？flex 布局的应用等等。下面将详细说一些我觉得很有意思的一些功能以及实现思路，通过写这篇文档，让自己掌握知识更加牢固。  
## 整体布局
毫无疑问，一开始的代码是从 App.js 这个文件一点一点构建起来的。App.js 是整个项目的入口，在这里完成了整个项目的基础布局：路由入口以及 store 入口。所有的路由都在这里定义，最外层的状态管理容器也在这里，这里犹如人体的大动脉，把血液和营养输送给不同部位。  
src 文件夹最外层，有一个store文件夹，其中的reducer.js文件夹用来合并所有组件里的小的reducer，并通过 App.js 分发给不同的组件。合并reducer采用了 `redux-immutable` 模块。该模块有一个`combineReducers`方法，接收一个对象，并返回一个大的`reducer`，在 store 文件夹里的 index.js 中使用 redux 模块的 `createStore` 来生成 store。导出出去给 App.js 使用。  在`react-redux`模块中，有一个`Provider` 组件，被这个组件包裹的其它组件就会自动能得到总的store里的数据，当然前提是要给`Provider`组件传入一个参数 —— `store={store}`。
