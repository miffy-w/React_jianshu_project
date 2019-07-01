import React, { Component } from 'react';
import { Tips, ExplainWrapper } from '../style';

// 版权和举报
export default class Explain extends Component {
    render() {
        return (
            <ExplainWrapper>
                <span className="doc-type">
                    <i className="iconfont">&#xe778;</i>前端
                </span>
                <span className="right-wrap">
                    <span className="tip-offs">举报文章</span>
                    <span className="copyright">
                        © 著作权归作者所有
                        <Tips className="copyright">
                            转载请联系作者获得授权，并标注“简书作者”。
                        </Tips>
                    </span>
                </span>
            </ExplainWrapper>
        );
    }
}
