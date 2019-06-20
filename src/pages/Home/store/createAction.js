import { homeTypes } from './index';
import axios from 'axios';

export const getHomePageData = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            dispatch(sendHomePageData(res.data.data));
        }).catch((err) => console.log(err));
    }
}

export function sendHomePageData(data) {
    return {
        type: homeTypes.GET_LIST_DATA,
        listData: data.list,
        recommendData: data.recommend,
        writerData: data.writer
    }
}