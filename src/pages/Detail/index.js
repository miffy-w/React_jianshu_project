import React from 'react';
import { connect } from 'react-redux';
import { detailActions } from './store';

import Title from './components/Title';
import Content from './components/Content';
import AuthorCard from './components/AuthorCard';
import Share from './components/Share';
import Explain from './components/Explain';
import Reward from './components/Reward';
import Comment from './components/Comment';

import { DetailWrapper } from './style';    // 最外层

class Detail extends React.PureComponent{
    render(){
        return(
            <DetailWrapper>
                {/* 标题区 */}
                <Title />

                {/* 内容区 */}
                <Content />

                {/* 打赏 */}
                <Reward />

                {/* 文章类型以及著作权 */}
                <Explain /> 

                {/* 作者名片 */}
                <AuthorCard />

                {/* 分享 */}
                <Share />

                {/* 下载简书APP */}
                <img alt="下载简书App" src="" />

                {/* 发表评论 */}
                <Comment />

            </DetailWrapper>
        );
    }
    componentDidMount(){
        // 获取路由传递来的 URL 参数，发送到 store 中
        // 让 detail 组件中的 Content 组件获取到文章列表
        this.props.sendArticleId(this.props.match.params.id);
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendArticleId(id){
        dispatch(detailActions.sendArticleId(id));
    }
});

export default connect(null,mapDispatchToProps)(Detail);