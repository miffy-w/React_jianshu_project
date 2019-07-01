import React from 'react';
import { connect } from 'react-redux';
import {
    WriterWrap,
    Exchange,
    User
} from '../style';

class Writer extends React.PureComponent{
    constructor(){
        super()
        this.initNum = 0;
    }
    render(){
        return (
            <WriterWrap>
                <div className="title">
                    <p>推荐作者</p>
                    <Exchange className="change" onClick={() => this.initNum ++}>
                        <i className="iconfont">&#xe851;</i>
                        <span>换一批</span>
                    </Exchange>
                </div>
                <div className="users">
                    {   
                        this.changeList()[0] ? 
                        this.changeList().map(item => {
                            return (
                                <User key={item.id}>
                                    <div className="left-info">
                                        <img alt="" className="head-pic" src={item.avatar_source} />
                                        <div className="user-info">
                                            <span className="top">{item.nickname}</span>
                                            <span className="bottom">写了
                                                {
                                                    item.total_wordage > 1000 ? (item.total_wordage / 1000).toFixed(1) + 'k' : item.total_wordage
                                                }
                                                字&nbsp;·&nbsp;
                                                {
                                                    item.total_likes_count > 1000 ? (item.total_wordage / 1000).toFixed(1) + 'k' : item.total_wordage
                                                }
                                                人喜欢
                                            </span>
                                        </div>
                                    </div>
                                    <div className="user-focus">
                                        <i className="iconfont">&#xe618;</i>
                                        关注
                                    </div>
                                </User>
                            )}): ''
                        }
                </div>
            </WriterWrap>
        );
    }
    changeList(){
        const { showAuthorNum } = this.props,len = this.props.writerData.length;
        let ary = [];
        if (this.initNum * showAuthorNum >= len){
            this.initNum = 0;
        }else{
            for (let i = this.initNum * showAuthorNum; i < this.initNum * showAuthorNum + showAuthorNum;i ++){
                ary.push(this.props.writerData[i]);
            }
        }
        return ary;
    }
}

const mapStateToProps = (state) => ({
    writerData: state.getIn(['home','writerData']),
    showAuthorNum: state.getIn(['home', 'showAuthorNum'])
});

export default connect(mapStateToProps,null)(Writer);