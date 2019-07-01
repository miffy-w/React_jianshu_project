import React, { Component } from 'react';
import {
    InWrapper,
    Switch,
    InputBox,
    Button,
    Input,
    Remind,
    Box,
    OtherWay
} from '../styled';

export default class SignIn extends Component {
    render() {
        return (
            <InWrapper>
                <Switch>
                    <Button className="in-switch">登录</Button>
                    <span className="point">·</span>
                    <Button className="up-switch">注册</Button>
                </Switch>
                <InputBox>
                    <Box className="ipt-top">
                        <i className="iconfont"></i>
                        <Input placeholder="手机号或邮箱" className="phone" type="text" />
                    </Box>
                    <Box className="ipt-bottom">
                        <i className="iconfont"></i>
                        <Input placeholder="密码" className="pass" type="password" />
                    </Box>
                </InputBox>
                <Remind>
                    <label>
                        <input defaultChecked type="checkbox" />记住我
                    </label>
                    <span className="problem">登录遇到问题? 登录</span>
                </Remind>
                <Button className="sign-in-btn">登录</Button>
                <p className="other-way">社交帐号登录</p>
                <OtherWay>
                    <i className="iconfont"></i>
                    <i className="iconfont"></i>
                    <i className="iconfont"></i>
                    <span className="other">其它</span>
                </OtherWay>
            </InWrapper>
        )
    }
}
