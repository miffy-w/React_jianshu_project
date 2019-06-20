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
        const {
            isFocus,
            prolongWidth,
            iptBlur,
            headerList
        } = this.props;
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
                                onFocus={() => prolongWidth(headerList)} 
                                onBlur={iptBlur}
                            ></Input>
                        </CSSTransition>
                        <i className={`iconfont ${isFocus ? 'focus zoom' : 'blur zoom'}`}>&#xe615;</i>

                        {this.showHotView()}

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
    showHotView(){
        const {
            page,
            headerList,
            isFocus,
            mouseIn,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleSwitchTag
        } = this.props;
        const pageList = [];
        const newList = headerList.toJS();

        // 这里需要注意：初始化时，headerList 是个空数组，
        // 因此如果不进行判断，Tag 组件的 key 值将获取不到（undefined）
        if(newList.length){
            var num = 10;
            if(page === totalPage){
                num = newList.length - (totalPage - 1) * num;
            }
            for(let i = (page - 1) * num;i < page * num;i ++){
                pageList.push(
                    <Tag key={newList[i]}>{newList[i]}</Tag>
                );
            }
        }
        
        if (isFocus || mouseIn) {
            return (
                <HotSearch className="hotTagView" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="angle"></div>
                    <div className="TagWrapper">
                        <span>热门搜索</span>
                        <ChangeBtn className="changeHotTag" 
                            onClick={() => handleSwitchTag(page,totalPage,this.spinIcon)}
                        ><i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>换一批</ChangeBtn>
                    </div>
                    <Button className="hotTag">
                        {pageList}
                    </Button>
                </HotSearch>
            );
        }
    }
}

const mapStateToProps = function(state){
    return {
        isFocus: state.getIn(['header','isFocus']),   // 取值 —— 取 state 下面的 header 下面的 focus 值
        // state.get('header').get('focus')   // 与上面调用结果一样   
        // 这里的 state 当然就是 reducer.js 函数参数中的 state
        // 当组件再用时就可以直接使用 props.isFocus 来调用  
        // 注意这里，在总的 store 文件夹里的 reducer 中使用了 redux 中的 combineReducers 进行管理
        headerList: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage'])
    }
}

const mapDispatchToprops = function (dispatch) {
    // 在这里用于派发 action
    return {
        prolongWidth(list) {
            // 派发 Ajax 请求：
            if(list.size === 0){        // 做判断是为了防止多余的请求
                dispatch(headerActions.getHotTag());
            }
            dispatch(headerActions.ipt_focus());
        },
        iptBlur() {
            dispatch(headerActions.ipt_blur());
        },
        handleMouseEnter(){
            dispatch(headerActions.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(headerActions.mouseLeave());
        },
        handleSwitchTag(page, totalPage,spinIcon) {
            let originRotate = spinIcon.style.transform.replace(/[^0-9]/ig,'');
            if (originRotate){
                originRotate = parseInt(originRotate,10);
            }else{
                originRotate = 0;
            }
            spinIcon.style.transform = `rotate(${originRotate + 360}deg)`;
            if(page < totalPage){
                dispatch(headerActions.switchTags(page + 1));
            }else{
                dispatch(headerActions.switchTags(1));
            }       
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Header);