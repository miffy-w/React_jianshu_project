import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { headerActions } from './store';
import {
    Head,
    Logo,
    Nav,
    Button,
    Input,
    HotSearch,
    ChangeBtn,
    Tag
} from './style';


class Header extends React.Component{
    render(){
        const { isFocus, prolongWidth, iptBlur } = this.props;
        return(
            <Head>
                <Logo></Logo>
                <Nav className="left-btn-nav">
                    <Button className="left-btn home-btn">
                        <i className="iconfont">&#xe682;</i>
                        首页
                    </Button>
                    <Button className="left-btn download">
                        <i className="iconfont">&#xe61a;</i>
                        下载APP
                    </Button>
                    <Button className="left-btn searchNav">
                        <CSSTransition
                            in={isFocus}
                            timeout={600}
                            classNames="slide"
                        >
                            <Input 
                                className={isFocus ? 'focused' : 'blured'} 
                                onFocus={prolongWidth} 
                                onBlur={iptBlur}
                            ></Input>
                        </CSSTransition>
                        <i className={`iconfont ${isFocus ? 'focus' : 'blur'}`}>&#xe615;</i>

                        {this.showHotView(isFocus)}

                    </Button>
                </Nav>

                <Nav className="right-btn-nav">
                    <Button className="right-btn Aa">
                        <i className="iconfont">&#xe636;</i>
                    </Button>
                    <Button className="right-btn beta">
                        简书钻
                    </Button>
                    <Button className="right-btn sign-btn">登陆</Button>
                    <Button className="right-btn radius-btn reg">注册</Button>
                    <Button className="right-btn radius-btn writting">
                        <i className="iconfont">&#xe616;</i>
                        写文章
                    </Button>
                </Nav>
            </Head>
        );
    }
    showHotView(bool){
        if(!bool){
            return null;
        }
        return (
            <HotSearch className="hotTagView">
                <div className="angle"></div>
                <div className="TagWrapper">
                    <span>热门搜索</span>
                    <ChangeBtn className="changeHotTag" onClick={}>换一批</ChangeBtn>
                </div>
                <Button className="hotTag">
                    {this.props.headerList.map((item) => <Tag key={item}>{item}</Tag>)}
                </Button>
            </HotSearch>
        );
    }
}

const mapStateToProps = function(state){
    return {
        isFocus: state.getIn(['header','focus']),   // 取值 —— 取 state 下面的 header 下面的 focus 值
        // state.get('header').get('focus')   // 与上面调用结果一样   
        // 这里的 state 当然就是 reducer.js 函数参数中的 state
        // 当组件再用时就可以直接使用 props.isFocus 来调用  
        // 注意这里，在总的 store 文件夹里的 reducer 中使用了 redux 中的 combineReducers 进行管理
        headerList: state.getIn(['header','list'])
    }
}

const mapDispatchToprops = function (dispatch) {
    // 在这里用于派发 action
    return {
        prolongWidth() {
            // 派发 Ajax 请求：
            dispatch(headerActions.getHotTag());
            dispatch(headerActions.ipt_focus());
        },
        iptBlur() {
            dispatch(headerActions.ipt_blur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Header);