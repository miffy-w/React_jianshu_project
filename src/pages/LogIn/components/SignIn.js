import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginActions } from '../store';

import {
    SignWrapper,
    Switch,
    InputBox,
    Button,
    Input,
    Remind,
    Box,
    OtherWay,
    OtherSignIn,
    Problem
} from '../styled';

class SignIn extends PureComponent {
    render() {
        return (
            <SignWrapper>
                <Switch className="in-switch">
                    <Link className="link" to="/log_in/sign_in">
                        <Button className="login-in-btn">登录</Button>
                    </Link>
                    <span className="point">·</span>
                    <Link className="link" to="/log_in/sign_up">
                        <Button className="login-up-btn">注册</Button>
                    </Link>
                </Switch>
                <InputBox>
                    <Box className="ipt-top">
                        <i className="iconfont account">&#xe601;</i>
                        <Input
                            placeholder="手机号或邮箱"
                            className="phone" type="text"
                            /* 在 styled-components 模块中，不应使用React里的 ref 而是 innerRef */ 
                            /* 注意这里的 this 指向 类组件 */ 
                            ref={(ipt) => this.get_ipt_text = ipt}
                        />
                    </Box>
                    <Box className="ipt-bottom">
                        <i className="iconfont pass">&#xe60d;</i>
                        <Input
                            placeholder="密码"
                            className="pass"
                            type="password"
                            ref={(ipt) => this.get_ipt_pass = ipt}
                        />
                    </Box>
                </InputBox>
                <Remind>
                    <label>
                        <input defaultChecked type="checkbox" />记住我
                    </label>
                    <span
                        onClick={() => {
                            this.props.tipsProblems(this.props.isShow);
                        }}
                        className="problem"
                    >登录遇到问题? 登录</span>
                    <Problem className="probrlm-view">
                        <p>用手机号重置密码</p>
                        <p>用邮箱重置密码</p>
                        <p>无法用海外手机登录</p>
                        <p>无法用Google账号登录</p>
                    </Problem>
                </Remind>
                <Button 
                    className="sign-in-btn submitBtn"
                    onClick = {
                        () => this.props.signTest(this.get_ipt_text.value, this.get_ipt_pass.value)
                    }
                >登录</Button>

                <OtherSignIn className="in-other-way">社交帐号登录</OtherSignIn>
                <OtherWay>
                    <i className="iconfont weibo">&#xe63d;</i>
                    <i className="iconfont weixin">&#xe715;</i>
                    <i className="iconfont qq">&#xe611;</i>
                    <span className="other">其它</span>
                </OtherWay>
            </SignWrapper>
        )
    }
}

function mapStateToProps(state){
    return{
        isLogin: state.getIn(['login','isLogin'])
    }
}

function mapDispatchToProps(dispatch){
    return{
        signTest(phone,password){
            dispatch(loginActions.signTest({phone,password}));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);