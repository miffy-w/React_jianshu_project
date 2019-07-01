import { detailTypes } from './index';
import axios from 'axios';

function contentData(data){
    return{
        type: detailTypes.CONTENT_DATA,
        data
    }
}

// 这里是 Content 组件请求的数据
export const getContentData = (id) => {
    return function(dispatch){
        axios.get('/api/detailContent.json?id=' + id).then((res) => {
            dispatch(contentData(res.data.data));
        }).catch((err) => console.log(err));
    }
};

// 外层 Detail 传递 文章 id
export const sendArticleId = (id) => ({
    type: detailTypes.SEND_ARTICLE_ID,
    id
});