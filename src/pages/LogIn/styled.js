import styled from 'styled-components';

export const LogInWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 0 100px 0px;
    background: #f1f1f1;
    img.logo{
        width: 180px;
        margin-top: 60px;
    }

`;

export const Wrapper = styled.div`
    width: 300px;
    padding: 40px 60px;
    background: #fff;
    box-shadow: 2px 2px 20px gray;
    margin: 0px auto;
`;

// Sign_In 部分：
export const SignWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 社交账号登录：
export const OtherSignIn = styled.p`
    font-size: 12px;
    padding: 40px 0px 0px 0px;
    color: #969696;
    &.up-other-way{
        padding-top: 20px;
    }
    &::before{
        content:'—————';
        padding-right: 20px;
    }
    &::after{
        content: '—————';
        padding-left: 20px;
    }
`;

// 切换登录/注册
export const Switch = styled.div`
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: space-evenly;
    span.point{
        font: 700 20px 'consoles';
        color: gray;
        line-height: 40px;
    }
    .link{
        text-decoration: none;
    }
`;

// 按钮：
export const Button = styled.div`
    padding: 10px 6px;
    font-size: 20px;
    cursor: pointer;
    &.login-in-btn,&.logup-up-btn{
        font-weight: 700;
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a;
    }
    &.login-up-btn,&.logup-in-btn{
        color: #969696;
        &:hover{
            border-bottom: 2px solid #ea6f5a;
        }
    }
    &.submitBtn{
        width: 100%;
        height: 40px;
        border-radius: 20px;
        color: white;
        padding: 0;
        line-height: 40px;
        text-align: center;
        /* 注册按钮颜色 */
        &.sign-up-btn{
            background-color: #42c02e;
            &:hover{
                background-color: #3db922;
            }
        }
        /* 登录按钮颜色 */
        &.sign-in-btn{
            background-color: #3194d0;
            &:hover{
                background-color: #187cb7;
            }
        }
    }
`;

// 登录账号/密码：
export const InputBox = styled.div`
    width: 300px;
    margin: 40px 0px 20px 0px;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    background: #eee;
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    &.ipt-top{
        border-bottom: 1px solid #c8c8c8;
        i.phone{
            font-size: 20px;
            font-weight: 500;
        }
    }
    i{
        color: #999;
        padding-left: 10px;
    }
`;

// input 输入框：
export const Input = styled.input`
    height: 30px;
    background: #eee;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 5px 0px 5px 10px;
`;

// 登录遇到的问题：
export const Remind = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 20px 20px 20px;
    color: #969696;
    span.problem{
        cursor: pointer;
        &:hover{
            color: #000;
            & + div.probrlm-view{
                display: block;
            }
        }
    }
`;

export const Problem = styled.div`
    position: absolute;
    display: none;
    top: 20px;
    right: 0px;
    background-color: white;
    padding: 10px 0px;
    color: #000;
    box-shadow: 3px 3px 10px #999;
    &:hover{
        display: block;
    }
    p{
        color: #333;
        font-size: 15px;
        padding: 12px;
        cursor: pointer;
        &:hover{
            background-color: #eee;
        }
    }
`;

export const OtherWay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i{
        font-size: 28px;
        padding: 10px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
        &.weibo{
            color: #e05244;
        }
        &.weixin{
            font-size: 32px;
            color: #00bb29;
        }
        &.qq{
            color: #498ad5;
        }
    }
    span.other{
        color: #999;
        cursor: pointer;
        font-weight: 600;
    }
`;
// ----------------------------------------------------------------------------*>
// 注册页面注意与提示：
export const SignUpMsg = styled.div`
    width: 100%;
    font-size: 12px;
    color: #969696;
    text-align: center;
    padding: 12px;
    p{
        padding-bottom: 6px;
    }
    span{
        cursor: pointer;
        color: #3194d0;
    }
`;