import React, { Component } from 'react'

import {
    ShareWrapper,
    Button,
    Tips
} from '../style';

// 分享组件
export default class Share extends Component {
    render() {
        return (
            <ShareWrapper>
                <Button className="like-article-num">
                    <i className="iconfont">&#xe602;</i>
                    <span className="line">喜欢</span>
                    <span className="num">44</span>
                </Button>
                <div className="shareRight">
                    <i className="iconfont weixin">
                        &#xe715;
                        <Tips className="share-weixin">分享到微信</Tips>
                    </i>
                    <i className="iconfont weibo">
                        &#xe63d;
                        <Tips className="share-weibo">分享到微博</Tips>
                    </i>
                    <i className="iconfont picture">
                        &#xe626;
                    </i>
                    <Button className="more-share">更多分享</Button>
                </div>
            </ShareWrapper>
        )
    }
}
