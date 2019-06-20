import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/Header';
import { Gstyle } from './style';
import { IconfontStyle } from './common/static/iconfont/iconfont';
import { store } from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';        // 路由模块

import Home from './pages/Home';
import Detail from './pages/Detail';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Gstyle />      {/* 全局的样式 */}
        <IconfontStyle />    {/* 全局的 iconfont 样式 */}
        <Header />
        <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' component={Detail}></Route>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
