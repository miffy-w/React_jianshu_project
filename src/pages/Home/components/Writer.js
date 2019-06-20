import React from 'react';
import { connect } from 'react-redux';
import {
    WriterWrap,
    Exchange,
    User
} from '../style';

class Writer extends React.Component{
    render(){
        return (
            <WriterWrap>
                <div className="title">
                    <p>推荐作者</p>
                    <Exchange className="change" onClick={this.props.rotateIcon}>
                        <i className="iconfont">&#xe851;</i>
                        <span>换一批</span>
                    </Exchange>
                </div>
                <div className="users">
                    {this.props.writerData.map(item => {
                        return (
                            <User key={item.id}>
                                <div className="left-info">
                                    <img alt="" className="head-pic" src={item.avatar_source} />
                                    <div className="user-info">
                                        <span className="top">{item.nickname}</span>
                                        <span className="bottom">写了
                                            {
                                                item.total_wordage > 1000 ? (item.total_wordage / 1000).toFixed(1) : item.total_wordage
                                            }
                                            字&nbsp;·&nbsp;
                                            {
                                                item.total_likes_count > 1000 ? (item.total_wordage / 1000).toFixed(1) : item.total_wordage
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
                        )})}
                </div>
            </WriterWrap>
        );
    }
}

const mapStateToProps = (state) => ({
    writerData: state.getIn(['home','writerData'])
});

const mapDispatchProps = (dispatch) => ({
    rotateIcon(){

    }
});

export default connect(mapStateToProps,mapDispatchProps)(Writer);