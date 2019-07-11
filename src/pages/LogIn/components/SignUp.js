import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginActions } from '../store';
import {
    SignWrapper,
    Switch,
    Button,
    InputBox,
    Box,
    Input,
    SignUpMsg,
    OtherSignIn,
    OtherWay
} from '../styled';

class SignUp extends Component {
    render() {
        return (
            <SignWrapper>
                <Switch className="up-switch">
                    <Link className="link" to="/log_in/sign_in">
                        <Button className="logup-in-btn">登录</Button>
                    </Link>
                    <span className="point">·</span>
                    <Link className="link" to="/log_in/sign_up">
                        <Button className="logup-up-btn">注册</Button>
                    </Link>
                </Switch>

                <InputBox className="sign_up-iptBox">
                    <Box className="ipt-top">
                        <i className="iconfont account">&#xe601;</i>
                        <Input
                            placeholder="你的昵称"
                            className="nickname" type="text"
                            /* 在 styled-components 模块中，不应使用React里的 ref 而是 innerRef */ 
                            /* 注意这里的 this 指向 类组件 */ 
                            ref={(ipt) => this.get_ipt_nickname = ipt}
                        />
                    </Box>
                    <Box className="ipt-top">
                        <i className="iconfont phone">&#xe60f;</i>
                        <Input
                            placeholder="手机号"
                            className="phone"
                            type="number"
                            ref={(ipt) => this.get_ipt_number = ipt}
                        />
                    </Box>
                    <Box className="ipt-bottom">
                        <i className="iconfont pass">&#xe60d;</i>
                        <Input
                            placeholder="设置密码"
                            className="pass"
                            type="password"
                            ref={(ipt) => this.get_ipt_pass = ipt}
                        />
                    </Box>
                </InputBox>

                <Button 
                    className="sign-up-btn submitBtn"
                    onClick = {
                        () => this.props.signTest(
                            this.get_ipt_nickname.value,
                            this.get_ipt_number.value,
                            this.get_ipt_pass.value
                        )
                    }
                >注册</Button>
                <SignUpMsg>
                    <p className="top_msg">点击 “注册” 即表示您同意并愿意遵守简书</p>
                    <p className="bottom_mag">
                        <span className="treaty">用户协议</span> 和&nbsp;
                        <span className="policy">隐私政策</span>。
                    </p>
                </SignUpMsg>

                <OtherSignIn className="up-other-way">社交帐号登录</OtherSignIn>

                <OtherWay>
                    <i className="iconfont weixin">&#xe715;</i>
                    <i className="iconfont qq">&#xe611;</i>
                </OtherWay>
            </SignWrapper>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        signTest(nickname,phone,password){
            dispatch(loginActions.signTest({nickname, phone, password}));
        }
    }
}

export default connect(null,mapDispatchToProps)(SignUp);
