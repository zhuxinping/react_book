##### react_book  这个项目用到了react全家桶  包括最新的"react-router-dom": "^4.2.2", "react-redux": "^5.0.6"  还用到了redux中间件 处理异步action


## 安装依赖
- 开发依赖
```
yarn add babel-core babel-loader babel-plugin-transform-decorators-legacy babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less-loader less file-loader url-loader babel-preset-react webpack webpack-dev-server html-webpack-plugin --dev
```

- 项目依赖
```
yarn add react react-dom redux react-redux react-router-dom axios react-transition-group redux-logger redux-thunk redux-promise babel-polyfill react-swipe swipe-js-iso express body-parser express-session
```


## 写redux的逻辑
- 服务端
- api层获取数据
--------
- action-types
- reducer
- action
- 组建中调用action
