import React, { Component } from 'react'

import {
    Author,
    Name,
    HeadPic,
    Tips,
    Meta
} from '../style';


// 上方标题及文章信息卡片组件
export default class Title extends Component {
    render() {
        return (
            <div className="title-info">
                <h1 className="title">佐佐木典士:我决定简单地生活</h1>
                <Author>
                    <HeadPic alt="作者头像" src="https://upload.jianshu.io/users/upload_avatars/7239965/0feace37-ade4-41fa-b430-7d925b4fe6c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
                    <div className="info-wrap">
                        <Name>
                            <span className="nickname">简笙宁</span>
                            <span className="symbol">
                                <Tips className="daren"> 日更达人</Tips>
                            </span>
                            <span className="follow">
                                <i className="iconfont">&#xe618;</i>
                                关注
                            </span>
                        </Name>
                        <Meta>
                            <span className="jsd">
                                <i className="iconfont">&#xe604;</i>
                                8.5
                            </span>
                            <span className="write-updata">2019.02.08 19:32*
                                <Tips className="end-edit"> 最后编辑于 2019.02.08 19:32</Tips>
                            </span>
                            <span className="font-num">字数</span>
                            <span className="reading">阅读</span>
                            <span className="discussed">评论</span>
                            <span className="like">喜欢</span>
                        </Meta>
                    </div>
                </Author>
            </div>
        );
    }
}
