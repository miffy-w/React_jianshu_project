import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/Header';
import { Gstyle } from './style';
import { IconfontStyle } from './common/static/iconfont/iconfont';
import { store } from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';        // 路由模块

// 主页
import Home from './pages/Home';
// 详情页
import Detail from './pages/Detail';
// 登录页
import LogIn from './pages/LogIn';
// 写文章页
import Write from './pages/Write';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Gstyle />      {/* 全局的样式 */}
        <IconfontStyle />    {/* 全局的 iconfont 样式 */}
        <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/log_in/:id' exact component={LogIn}></Route>
              <Route path='/write' exact component={Write}></Route>
              {
                /* URL 传参 在 Detail 组件中使用 this.props.match.params 访问到传入的url参数 */ 
              }
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
