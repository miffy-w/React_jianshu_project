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

function getMoreListData(data,page) {
    return {
        type: homeTypes.GET_MORE_LIST,
        data,
        page
    }
}

export function getMoreList(page) {
    return (dispatch) => {
        axios.get('/api/homeListData.json?page=' + page).then((res) => {
            dispatch(getMoreListData(res.data.data,page + 1));
        }).catch((err) => console.log('getMoreList: ', err));
    }
}

// 显示按钮:
export const showBtn = function(){
    return {
        type:homeTypes.SHOW_BTN,
        bool: true
    }
}
// 隐藏按钮：
export const disappearBtn = function () {
    return {
        type: homeTypes.DISAPPEAR_BTN,
        bool: false
    }
}

// 改变推荐作者组件的页数：
export const changePageList = function(nowPage,allPage){
    var obj = {
        type: homeTypes.CHANGE_PAGE_LIST,
        page: 1
    }
    // 当前页数小于总页数，则获取下一页的数据
    if(nowPage < allPage){
        obj.page = nowPage + 1;
    }else{      // 当前页数等于总页数，则再获取第一页的数据
        obj.page = 1
    }
    return obj;
}