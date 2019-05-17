import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/Header';
import { Gstyle } from './style';
import { GobalStyle } from './common/static/iconfont/iconfont';
import { store } from './store/index';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Gstyle />
        <GobalStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
