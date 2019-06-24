import React from 'react';
import { connect } from 'react-redux';
import Writer from './components/Writer';
import DownAPP from './components/DownApp';
import List from './components/List';
import { homeActions } from './store';
import Recommend from './components/Recommend';

import {
    HomeWrapper,
    WrapperLeft,
    WrapperRight,
    GoTop
} from './style';

class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <WrapperLeft>
                    <img alt="banner-img" className="banner-img" src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    {/* 文章列表 */}
                    <List />
                </WrapperLeft>
                <WrapperRight>
                    {/* 应用专栏 */}
                    <Recommend />
                    {/* 二维码下载APP */}
                    <DownAPP />
                    {/* 推荐作者 */}
                    <Writer />
                </WrapperRight>
                {
                    this.props.showBackBtn ? <GoTop onClick={this.props.gotoTop}>返回顶部</GoTop> : ''
                }
            </HomeWrapper>
        );
    }

    componentWillUnmount(){
        window.onscroll = null;
    }
    componentDidMount(){
        this.bindEvent();
        this.props.getHomeData();
    }
    bindEvent(){
        const { showBtn,disappearBtn } = this.props;
        window.onscroll = function(){
            console.log(document.documentElement.scrollTop);
            if (document.documentElement.scrollTop > 600) {
                showBtn();
            } else {
                disappearBtn();
            }
        }
    }
}

function mapStateToProps(state){
    return {
        showBackBtn: state.getIn(['home','showBackBtn'])
    }
}

function mapDispatchToprops(dispatch){
    return {
        getHomeData(){
            dispatch(homeActions.getHomePageData());
        },
        // 回到顶部：
        gotoTop() {
            document.documentElement.scrollTop = 0;
            dispatch(homeActions.disappearBtn());
        },
        // 显示按钮：
        showBtn(){
            dispatch(homeActions.showBtn());
        },
        // 不展示按钮：
        disappearBtn(){
            dispatch(homeActions.disappearBtn());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Home);