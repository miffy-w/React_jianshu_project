import React from 'react';
import qrcode from '../static/qrcode.png';
import {
    DownWrapper,
    Qrcode
} from '../style';

class DownAPP extends React.Component{
    render(){
        return(
            <DownWrapper>
                <Qrcode className="bigPic">
                    <div className="angle"></div>
                    <img alt="big-qrcode" src={qrcode} />
                </Qrcode>
                <img className="qrcode" alt="二维码下载APP" src={qrcode} />
                <div className="infoWrapper">
                    <h2>下载简书手机App
                        <i className="iconfont">&#xe612;</i>
                    </h2>
                    <p>随时随地发现和创作内容</p>
                </div>
            </DownWrapper>
        );
    }
}

export default DownAPP;