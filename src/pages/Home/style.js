import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 1000px;
    height: 400px;
    margin: 30px auto;
`;
export const WrapperLeft = styled.div`
    width: 640px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 6px;
        cursor: pointer;
    }
`;

export const WrapperRight = styled.div`
    width: 320px;
    float: right;
`;

// List.js 部分：
export const ListWrapper = styled.div`
    width: 625px;
    position: relative;
`;

export const Item = styled.div`
    height: 150px;
    width: 625px;
    border-bottom: 1px solid #f0f0f0;
    padding: 15px 2px 0px 0;
    margin: 16px 0px;
    div.infoView{
        width: 100%;
        position: absolute;
        left: 0;
        *{
            width: 100%;
        }
        h2 {
            width: 458px;
            font: 600 18px '微软雅黑';
            margin-bottom: 8px;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
            & + p{
                width: 458px;
                font-size: 13px;
                color: #999;
                line-height: 24px;
            }
        }
    }
    img.listPic{
        height: 100px;
        width: 150px;
        float: right;
        margin-top: 20px;
        border-radius: 6px;
    }
`;

export const Info = styled.p`
    width: 458px;
    height: 20px;
    margin-top: 8px;
    line-height: 20px;
    & *{
        font-size: 12px;
        color: #b4b4b4;
    }
    i{
        font-size: 13px;
        padding-right: 3px;
        &.level{
            color: #f33;
        }
    }
    span{
        margin-right: 6px;
        &.hover{
            cursor: pointer;
        }
        span.level{
            color: #f33;
        }
    }
`;

// recommend 部分：
export const RecommendWrapper = styled.div`
    width: 280px;
    height: 230px;
`;

export const Card = styled.div`
    width: 100%;
    cursor: pointer;
    height: 50px;
    margin-bottom: 10px;
    background: url(${(props) => props.src}) no-repeat;
    background-size: contain;
`;

// DownApp 部分：
export const DownWrapper = styled.div`
    position: relative;
    height: 82px;
    cursor: pointer;
    width: 260px;
    padding: 10px;
    margin: 30px 0;
    border: 1px solid #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &:hover{
        .bigPic{
            display: block;
            transition: all 0.8s;
        }
    }
    .qrcode{
        height: 60px;
        width: 60px;
        margin-left: 10px;
    }
    .infoWrapper{
        padding-left: 12px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            margin-top: 10px;
            color: #999;
            font-size: 13px;
        }
    }
`;

export const Qrcode = styled.div`
    display: none;
    position: absolute;
    top: -170px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border: 1px solid #777;
    background: #fff;
    border-radius: 6px;
    .angle{
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        height: 20px;
        width: 20px;
        transform: rotate(45deg);
        border: 1px solid #999;
        background: #fff;
        border-left: none;
        border-top: none;
        border-radius: 2px;
    }
    img{
        height: 150px;
        width: 150px;
    }
`;

// Writer 部分：
export const WriterWrap = styled.div`
    width: 280px;
    height: 300px;
    /* border: 1px solid #333; */
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & > p{
            color: #999;
        }
    }
`;

export const Exchange = styled.div`
    color: #999;
    cursor: pointer;
    i.iconfont{
        font-size: 13px;
    }
    &:hover{
        color: #333;
    }
`;

export const User = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 280px;
    height: 45px;
    margin-top: 30px;
    cursor: pointer;
    div.left-info{
        display: flex;
        img.head-pic{
            height: 48px;
            width: 48px;
            border-radius: 50%;
        }
        div.user-info{
            margin-left: 16px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            span.top{
                font-size: 14px;
            }
            span.bottom{
                margin-top: 10px;
                font-size: 13px;
                color: #999;
            }
        }
    }
    div.user-focus{
        i.iconfont{
            font-size: 18px;
            font-size: bold;
        }
        color: #42c02e;
    }
`;