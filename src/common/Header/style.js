import styled from 'styled-components';
import logoPic from '../static/logo.png';

export const Head = styled.header`
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic}) no-repeat;
    flex: 1 0 100px;
    background-size: contain;
    margin-left: 40px;
    @media screen and (max-width: 1300px) {
        margin-left: 0px;
    }
`
export const Nav = styled.nav`
    height: 56px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    &.left-btn-nav{
        width: 960px;
        align-items: center;
        margin-left: 160px;
        .left-btn{
            margin-left: 16px;
            text-align: center;
        }
    }
    &.right-btn-nav{
        justify-content: center;
        align-items: center;
        margin-right: 40px;
        .right-btn{
            margin-right: 20px;
            text-align: center;
        }
    }
    @media screen and (max-width: 1300px) {
        &.left-btn-nav{
            margin-left: 30px;
        }
        &.right-btn-nav{
            margin-right: 0px;
        }
    }
`
export const Button = styled.div`
    line-height: 56px;
    cursor: pointer;
    height: 56px;
    font-size: 17px;
    i{
        padding-right: 6px;
    }
    &.home-btn{
        width: 90px;
        color: #ea6f5a;
    }
    &.beta{
        width: 60px;
    }
    &.right-btn{
        color: #969696;
        font-size: 17px;
    }
    &.download{
        width: 100px;
        padding: 0px 10px;
    }
    &.Aa{
        width: 34px;
    }
    &.sign-btn{
        width: 56px;
        color: #969696;
    }
    &.radius-btn{
        height: 38px;
        border-radius: 19px;
        border: 1px solid #ea6f5a;
        line-height: 38px;
    }
    &.download:hover{
        background-color: #eee;
    }
    &.searchNav{
        position: relative;
        height: 38px;
        border-radius: 19px;
        background-color: #eee;
        // 过渡动画：
        .slide-enter {
            transition: all .6s ease-out;
        }
        .slide-enter-active{
            width: 300px;
        }
        .slide-exit{
            transition: all .6s ease-out;
        }
        .slide-exit-active{
            width: 200px;
        }
        @media screen and (max-width: 1500px) {
            .slide-enter-active{
                width: 250px;
            }
            .slide-exit-active{
                width: 150px;
            }
        }
        @media screen and (max-width: 1000px) {
            .slide-enter-active{
                width: 150px;
            }
            .slide-exit-active{
                width: 150px;
            }
        }
        i{
            position: absolute;
            right: 0;
            color: #969696;
            display: block;
            height: 38px;
            width: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 26px;
            border: 5px solid #eee;
            box-sizing: border-box;
            padding: 0;
            &.focus{
                background-color: gray;
                color: #ffffff;
            }
            &.blur{
                background-color: inherit;
                color: inherit;
            }
            @media screen and (max-width: 600px) {
                & {
                    display: none;
                }
            }
        }
    }
    &.reg{
        width: 80px;
        color: #ea6f5a;
    }
    &.writting{
        width: 100px;
        background-color: #ea6f5a;
        color: #ffffff;
    }

    &.hotTag{
        width: 210px;
    }
`
export const Input = styled.input.attrs({
    type: 'text',
    placeholder: '搜索'
})`
    &.focused{
        width: 300px;
    }
    &.blured{
        width: 200px;
    }
    font-family: '宋体';
    height: 38px;
    background-color: #eee;
    padding: 0px 36px 0px 16px;
    float: left;
    border-radius: 19px;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    &::placeholder{
        color: #aaa;
    }
    @media screen and (max-width: 1500px) {
        &.blured{
            width: 150px;
        }
        &.focused{
            width: 250px;
        }
    }
    @media screen and (max-width: 1000px) {
        &.blured{
            width: 150px;
        }
        &.focused{
            width: 150px;
        }
    }
    @media screen and (max-width: 600px) {
        & {
            display: none;
        }
    }
`

export const HotSearch = styled.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 210px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0px 20px 10px 20px;
    /* display: none; */
    color: gray;
    & div.angle{
        position: absolute;
        top: -10px;
        left: 30px;
        transform: rotate(45deg);
        height: 16px;
        width: 16px;
        border: 1px solid #ccc;
        border-right: none;
        border-bottom: none;
        background-color: #ffffff;
    }
    & div.TagWrapper{
        width: 210px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span{
            font-size: 14px;
        }
    }
`
export const ChangeBtn = styled.span`
    &.changeHotTag{
        font-size: 13px;
    }
    &.changeHotTag:hover{
        color: #000;
    }
`
export const Tag = styled.a.attrs({
    href: '#'
})`
    display: block;
    text-decoration: none;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 12px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14px;
    margin: 0px 10px 12px 0px;
    &:hover{
        border: 1px solid #aaa;
        color: #222;
    }
`
