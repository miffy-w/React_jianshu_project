import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    LogInWrapper,
    Wrapper
} from './styled';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import logoPic from '../../common/static/logo.png';

class LogIn extends Component {
    render() {
        const {
            isLogin,
            match       // 登录或者注册传入的 url 参数
        } = this.props;

        if(!isLogin){
            return (
                <LogInWrapper>
                    <img alt="logo" src={logoPic} className="logo" />
                    <Wrapper>
                        {
                            // 传入的 id 等于 “sign_in” 则展示登录页面，否则展示注册页面
                            // 这个传入的 id 在 common 文件夹里的 Header 组件里
                            match.params.id === 'sign_in' ? <SignIn /> : <SignUp />
                        }
                    </Wrapper>
                </LogInWrapper>
            );
        }else{
            // 用于重定向
            return <Redirect to="/"/>
        }
    }
}

function mapStateToProps(state){
    return{
        isLogin: state.getIn(['login','isLogin']),
    }
}

export default connect(mapStateToProps,null)(LogIn);