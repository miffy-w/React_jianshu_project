import React from 'react';
import { connect } from 'react-redux';
import { homeActions } from '../store';
import {
    WriterWrap,
    Exchange,
    User
} from '../style';

class Writer extends React.PureComponent{
    render(){
        const { nowPage, showAuthorNum, writerData, changePageList } = this.props;
        this.allPage = Math.ceil(writerData.length / showAuthorNum);
        return (
            <WriterWrap>
                <div className="title">
                    <p>推荐作者</p>
                    
                    <Exchange 
                        className="change"
                        onClick={() => changePageList(nowPage,this.allPage,this.trade)}>
                        <i className="iconfont" ref={(i) => {this.trade = i}}>&#xe851;</i>
                        <span>换一批</span>
                    </Exchange>
                </div>
                <div className="users">
                    {   /* 这里截取每一页的数据 nowPage - 1 是因为 数组下标从零开始的；
                            showAuthorNum * nowPage 的长度超过了 writerData 的长度也没事，
                            超过的部分不算，只算有数据的部分。
                        */ 
                        writerData.slice((nowPage - 1) * showAuthorNum ,showAuthorNum * nowPage)
                        .map(item => {
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
                            )})
                        }
                </div>
            </WriterWrap>
        );
    }
}

const mapStateToProps = (state) => ({
    // 拿到所有的推荐作者数据
    writerData: state.getIn(['home','writerData']),
    // 推荐作者一次展示几个
    showAuthorNum: state.getIn(['home', 'showAuthorNum']),
    // 当前的推荐作者页数
    nowPage: state.getIn(['home','nowPage'])
});

const mapDispatchToProps = (dispatch) => ({
    changePageList(nowPage,allPage,trade){
        console.log(trade);
        if(trade){
            let originRotate = trade.style.transform.replace(/[^0-9]/ig, '');
            // 去除 数字之外的字符 获取到原来旋转的数值
            if (originRotate) {
                // 如果有数值，则转化成数字
                originRotate = parseInt(originRotate, 10);
            } else {
                // 没有数值，赋值为 0
                originRotate = 0;
            }
            // 旋转
            trade.style.transform = `rotate(${originRotate + 360}deg)`;
        }
        dispatch(homeActions.changePageList(nowPage,allPage));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Writer);