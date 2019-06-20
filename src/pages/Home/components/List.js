import React from 'react';
import { connect } from 'react-redux';
import {
    ListWrapper,
    Item,
    Info
} from '../style';

class List extends React.Component{
    render(){
        return (
            <ListWrapper>
                {this.props.listData.map(item => (
                    <Item key={item.index}>
                        <div className="infoView">
                            <h2>{item.title}</h2>
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
            </ListWrapper>
        );
    }
}

function mapStateToProps(state){
    return{
        listData: state.getIn(['home','listData'])
    }
}

export default connect(mapStateToProps, null)(List);