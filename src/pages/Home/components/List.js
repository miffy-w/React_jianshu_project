import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    ListWrapper,
    Item,
    Info,
    LoadMore
} from '../style';
import { homeActions } from '../store';

class List extends React.PureComponent{
    render(){
        return (
            <ListWrapper>
                {this.props.listData.map((item,index) => (
                    <Item key={index}>
                        <div className="infoView">
                            <Link className="title-link" to={"/detail/" + item.index}>
                                {/* 
                                    注意这里的 Link的 to 属性，他把 item.index 传递了出去
                                    这是路由，在 App.js 中的 ‘/ditail/:id’字段就会被检测到
                                    来到 Detail 组件的 index.js 中，使用 this.props.match.params.id
                                    就会获取到这里传入的 id 值。
                                */}
                                <h2>{item.title}</h2>
                            </Link>
                            <p>{item.describe}</p>
                            <Info>
                                <span>
                                    <i className="iconfont level">&#xe604;</i>
                                    <span className="level">{item.level}</span>
                                </span>
                                <span className="hover">
                                    <i className="iconfont"></i>
                                    <span className="author">{item.author}</span>
                                </span>
                                <span className="hover">
                                    <i className="iconfont">&#xe624;</i>
                                    <span className="discuss">{item.review_count}</span>
                                </span>
                                <span>
                                    <i className="iconfont">&#xe635;</i>
                                    <span>{item.like_count}</span>
                                </span>
                            </Info>
                        </div>
                        <img className="listPic" alt="" src={item.picUrl} />
                    </Item>
                ))}
                <LoadMore onClick={() => this.props.getMoreList(this.props.listPage)}>加载更多</LoadMore>
            </ListWrapper>
        );
    }
}

function mapStateToProps(state){
    return{
        listData: state.getIn(['home','listData']),
        listPage: state.getIn(['home','listPage'])
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMoreList(page){
            dispatch(homeActions.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);