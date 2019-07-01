import React, { Component } from 'react'
import { Button, RewardWrapper } from '../style';

// 打赏组件
export default class Reward extends Component {
    render() {
        return (
            <RewardWrapper>
                <p className="title">谷粒多多</p>
                <Button className="reward-btn">赞赏支持</Button>
            </RewardWrapper>
        )
    }
}
