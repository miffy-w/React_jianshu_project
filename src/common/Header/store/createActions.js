import { headerTypes } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

export const ipt_focus = () => ({
    type: headerTypes.IPTFOCUS
});

export const sendHotTagData = (data) => {
    return {
        type: headerTypes.HOT_TAG_DATA,
        data: fromJS(data)
        // 注意这里，在 reducer.js 文件 state 中的 list 属性还是一个普通数组
        // 应该把这个数组也转成 immutable 对象
    }
}

export const getHotTag = () => {
    return (dispatch) => {
        axios.get('/api/hotTag.json').then((res) => {
            dispatch(sendHotTagData(res.data.data));
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const ipt_blur = () => ({
    type: headerTypes.IPTBLUR
});