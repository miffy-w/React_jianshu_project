import React, { Component } from 'react';
import { ContentWrapper } from '../style';
import { connect } from 'react-redux';
import { detailActions } from '../store';

// 内容区
class Content extends Component {
    render() {
        return (
            <ContentWrapper dangerouslySetInnerHTML={{__html: this.props.contentData}}>
                {/* 内容区域  Ajax 动态生成 因为数据是 HTML 字符串，
                  * 应该使用 react 提供的 dangerouslySetInnerHTML 属性的 __html 属性渲染数据
                  （强制把字符串解析成 HTML 片段）
                */}
            </ContentWrapper>
        );
    }
    componentDidMount(){
        this.props.getContentData(this.props.id);
    }
}

function mapStateToProps(state){
    return{
        contentData: state.get('detail').get('contentData'),
        id: state.getIn(['detail','id'])        // 获取文章 id 值
        /* 其实这里没必要这么做，在 index.js 中获取到 id 之后，发送到 store 
           store 根据 发送来的 id 值，设置完整的数据项（即 detail 组件中所以小组件的数据）
           这样，每个小组件只需通过 state 获取自己的 props数据然后渲染页面就行了。
        */
    }
}

function mapDispatchToProps(dispatch){
    return{
        getContentData(id){
            dispatch(detailActions.getContentData(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);
