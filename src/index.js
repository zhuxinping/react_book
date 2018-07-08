import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// 配置路由的组件

import App from "./containers/App";
import Detail from "./containers/Detail/Detail";
// 组件分为容器组件和基础组件
import {Provider} from 'react-redux';
import store from './store'
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
import ProtectedRoute from "./ProtectedRoute";

import syncComponent from './SyncComponent'
let Home = syncComponent(()=>import("./containers/Home/Home"));
let Lesson = syncComponent(()=>import("./containers/Lesson/Lesson"));
let Profile = syncComponent(()=>import("./containers/Profile/Profile"));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch> {/*匹配path 匹配后渲染 并且不再继续渲染*/}
          <Route path="/" exact={true} component={Home}/>
          <ProtectedRoute path="/lesson" component={Lesson}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/detail/:lessonId" component={Detail}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
        </Switch>
      </App>
    </Router>
  </Provider>,window.root);
