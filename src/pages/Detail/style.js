import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width: 620px;
    margin: 60px auto;
    div.title-info{
        margin-bottom: 50px;
        h1.title{
            font: 700 34px '微软雅黑';
        }
    }
`;

// 作者及文章详情
export const Author = styled.div`
    display: flex;
    margin: 32px 0px;
    flex-direction: row;
    align-items: center;
    & > div.info-wrap{
        display: flex;
        flex-direction: column;
    }
`;

// 上面的作者、关注
export const Name = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    span{
        margin-right: 10px;
        &.nickname{
            cursor: pointer;
        }
        &.symbol{
            position: relative;
            display: block;
            height: 20px;
            width: 20px;
            background: url('https://cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png') no-repeat;
            background-size: 20px 20px;
            margin-top: -1px;
            &:hover{
                p.daren{
                    display: block;
                }
            }
        }
        &.follow{
            i.iconfont{
                font-weight: bold;
                font-size: 12px;
            }
            padding: 1px;
            text-align: center;
            color: white;
            display: block;
            width: 50px;
            height: 16px;
            background: #42c02e;
            font-size: 12px;
            line-height: 16px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`

// 头像插件
export const HeadPic = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
    cursor: pointer;
`;

// 下面的文章信息
export const Meta = styled.div`
    display: flex;
    flex-direction: row;
    color: #969696;
    font-size: 12px;
    span{
        padding-right: 10px;
        &.jsd{
            color: #ea6f5a;
            i.iconfont{
                font-size: 12px;
                padding-right: 2px;
            }
        }
        &.write-updata{
            display: block;
            position: relative;
        }
        &.write-updata:hover{
            p.end-edit{
                display: block;
            }
        }
    }
`;

// hover 后的提示信息
export const Tips = styled.p`
    display: none;
    color: white;
    height: 20px;
    line-height: 20px;
    border-radius: 4px;
    padding: 3px 5px;
    background-color: black;
    position: absolute;
    white-space: nowrap;        /* 强制不换行 */
    font-size: 16px;
    left: 50%;
    transform: translateX(-50%);
    &::after{
        content: '';
        display: block;
        position: absolute;
        height: 8px;
        width: 8px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        transform: rotate(45deg);
        z-index: 0;
        background-color: #000;
        bottom: -4px;
    }
    &.daren{
        top: -34px;
    }
    &.end-edit{
        top: 20px;
        &::after{
            top: -4px;
            padding: 0;
        }
    }
    /* 著作版权 */
    &.copyright{
        top: -34px;
    }
    /* 勋章说明 */
    &.tips-medal{
        top: -34px;
    }
    /* 分享 */
    &.share-weixin{
        top: -34px;
    }
    &.share-weibo{
        top: -34px;
    }
`;

// 内容区
export const ContentWrapper = styled.article`
    width: 100%;
    p{
        margin-bottom: 24px;
        text-indent: 36px;
        line-height: 30px;
    }
    img{
        margin: 0px 0px 20px 0px;
    }
`;

export const RewardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    p.title{
        color: #969696;
        margin: 30px 0px;
        font: 700 17px '';
    }
`

export const Button = styled.div`
    background: #ea6f5a;
    font-size: 16px;
    color: #ffffff;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    width: 100px; 
    &.reward-btn,
    &.card-btn{
        color: white;
        height: 34px;
        line-height: 34px;
        padding: 3px 0px;
        background-color: #42c02e;
        i{
            font: 700 16px '';
        }
    }
    &.reward-btn{
        background: #ea6f5a;
    }
    &.like-article-num{
        width: 120px;
        padding: 10px 30px;
        background: none;
        border: 1px solid #EA6F5A;
    }
    &.more-share{
        background: none;
        color: #969696;
        height: 50px;
        border: 1px solid #969696;
        border-radius: 25px;
        line-height: 50px;
    }
`;

// 版权及文章类型
export const ExplainWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 13px;
    color: #969696;
    span.doc-type{
        cursor: pointer;
        i{
            padding-right: 4px;
        }
    }
    span.right-wrap{
        display: flex;
        flex-direction: row;
        span.tip-offs{
            cursor: pointer;
        }
        span.copyright{
            display: block;
            margin-left: 20px;
            position: relative;
            &:hover{
                .copyright{
                    display: block;
                }
            }
        }
    }
`;

export const CardWrapper = styled.div`
    margin: 60px 0;
    background: hsla(0,0%,71%,.1);
    border-radius: 4px;
    padding: 24px;
    width: 580px;
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
    justify-content: center;
    align-items: center;
    p.autograph{
        width: 100%;
        padding: 20px 0px 0px 0px;
        font-size: 13px;
        color: #969696;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const ShareWrapper = styled.div`
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .like-article-num{
        color: #EA6F5A;
        font-size: 19px;
        border-radius: 30px;
        span.line{
            display: inline-block;
            line-height: 32px;
            padding: 0px 16px 0px 10px;
            margin-right: 16px;
            border-right: 1px solid #EA6F5A;
        }
        i.iconfont{
            font-weight: bold;
        }
        &:hover{
            background: hsla(0,0%,71%,.1);
        }
    }
    div.shareRight{
        display: flex;
        flex-direction: row;
        i.iconfont{
            display: block;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            font-size: 30px;
            line-height: 50px;
            border: 1px solid #dcdcdc;
            cursor: pointer;
            text-align: center;
            margin-right: 12px;
            position: relative;
            &:hover{
                background: #eee;
            }
            &.weixin{
                color: #00bb29;
                &:hover{
                    .share-weixin{
                        display: block;
                    }
                }
            }
            &.weibo{
                color: #e05244;
                &:hover{
                    .share-weibo{
                        display: block;
                    }
                }
            }
            &.picture{
                color: #969696;
            }
        }
    }
`;

export const TopCard = styled.div`
    width: 580px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 50px 2 106px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
    div.middle-wrap{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: -120px;
        div.middle-top{
            margin-bottom: 10px;
            display: flex;
            flex-direction: row;
            *{
                margin-right: 6px;
            }
            i.sex{
                color: #3194d0;
                font-size: 18px;
                padding-left: 3px;
                line-height: 20px;
            }
            span.nickname{
                cursor: pointer;
            }
            span.medal{
                position: relative;
                display: block;
                height: 20px;
                background: url('https://upload.jianshu.io/user_badge/595a1b60-08f6-4beb-998f-2bf55e230555')no-repeat;
                background-size: 20px 20px;
                width: 20px;
                border-radius: 50%;
                &:hover{
                    .tips-medal{
                        display: block;
                    }
                }
            }
        }
        p.middle-bottom{
            font-size: 13px;
            color: #969696;
        }
    }
`;

export const CommentWrapper = styled.div`

`;