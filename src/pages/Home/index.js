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
    WrapperRight
} from './style';

class Home extends React.Component{
    render(){
        return(
            <HomeWrapper>
                <WrapperLeft>
                    <img alt="banner-img" className="banner-img" src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                    <List />
                </WrapperLeft>
                <WrapperRight>
                    <Recommend />
                    <DownAPP />
                    <Writer />
                </WrapperRight>
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.props.getHomeData();
    }
}

function mapDispatchToprops(dispatch){
    return {
        getHomeData(){
            dispatch(homeActions.getHomePageData());
        }
    }
}

export default connect(null,mapDispatchToprops)(Home);