import React, { Component } from 'react'

// 下方的作者名片部分

import {
    CardWrapper,
    Tips,
    TopCard,
    HeadPic,
    Button
} from '../style';

export default class AuthorCard extends Component {
    render() {
        return (
            <CardWrapper>
                <TopCard>
                    <HeadPic alt="head-pic" src="https://upload.jianshu.io/users/upload_avatars/13253432/8243a8c9-30a9-4814-a66f-691620e33f32.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
                    <div className="middle-wrap">
                        <div className="middle-top">
                            <span className="nickname">多云转晴丶</span>
                            <span className="medal">
                                <Tips className="tips-medal">程序员优秀作者</Tips>
                            </span>
                            <i className="iconfont sex">&#xe641;</i>
                        </div>
                        <p className="middle-bottom">
                            <span className="word-num">写了xxx字，</span>
                            <span className="follow-num">被 1590 人关注，</span>
                            <span className="enjoy-num">获得了 8672 个喜欢</span>
                        </p>
                    </div>
                    <Button className="card-btn">
                        <i className="iconfont">&#xe618;</i>
                        关注
                    </Button>
                </TopCard>
                <p className="autograph">
                    热爱生活， 做一个爱分享的人～ 鲁迅先生曾说：“ 愿中国青年都摆脱冷气， 只是向上走， 不必听自暴自弃者流的话。
                </p>
            </CardWrapper>
        )
    }
}
