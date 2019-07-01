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
export const InWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p.other-way{
        font-size: 12px;
        padding: 40px 0px 20px 0px;
        color: #969696;
        &::before{
            content:'—————';
            padding-right: 20px;
        }
        &::after{
            content: '—————';
            padding-left: 20px;
        }
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
`;

// 按钮：
export const Button = styled.div`
    padding: 10px 2px;
    font-size: 20px;
    cursor: pointer;
    &.in-switch{
        font-weight: 700;
        border-bottom: 2px solid #ea6f5a;
        color: #ea6f5a;
    }
    &.up-switch{
        color: #969696;
    }
    &.sign-in-btn{
        width: 100%;
        height: 40px;
        background: #3db922;
        border-radius: 20px;
        color: white;
        padding: 0;
        line-height: 40px;
        text-align: center;
        &:hover{
            background: #3194d0;
        }
    }
`;

// 登录账号/密码：
export const InputBox = styled.div`
    width: 300px;
    margin-top: 40px;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    background: #eee;
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    &.ipt-top{
        border-bottom: 1px solid #c8c8c8;
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
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    color: #969696;
    span.problem{
        cursor: pointer;
        &:hover{
            color: #000;
        }
    }
`;

export const OtherWay = styled.div``;