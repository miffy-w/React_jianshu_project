import React, { Component } from 'react';
import {
    LogInWrapper,
    Wrapper
} from './styled';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import logoPic from '../../common/static/logo.png';

export default class LogIn extends Component {
    render() {
        return (
            <LogInWrapper>
                <img alt="logo" src={logoPic} className="logo" />
                <Wrapper>
                    <SignIn />
                    <SignUp />
                </Wrapper>
            </LogInWrapper>
        );
    }
}
