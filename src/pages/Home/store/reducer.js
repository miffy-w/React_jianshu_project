import { fromJS } from 'immutable';
import { homeTypes } from './index';

// 把原始数据变为 immutable 对象通过 fromJS 方法
const defaultState = fromJS({
    listData: [],           // 文章列表数据
    listPage: 1,            // 列表页数数据
    recommendData: [],      // recommend 数据
    writerData: [],         // 推荐作者数据
    showAuthorNum: 5,      // 推荐作者一次展示几个
    nowPage: 1,            // 当前的推荐作者页数
    showBackBtn: false      // 是否展示“返回顶部”按钮
});

function reducer(state = defaultState, action) {

    switch (action.type) {
        // 获取到首页的全部数据
        case homeTypes.GET_LIST_DATA:
            return state.merge({
                listData: action.listData,
                recommendData: action.recommendData,
                writerData: action.writerData,
            });
        case homeTypes.GET_MORE_LIST:
            return state.set('listData',state.get('listData').concat(action.data)).set('listPage',action.page);
        // 是否展示 返回顶部按钮
        case homeTypes.SHOW_BTN: 
            return state.set('showBackBtn',action.bool);
        // 是否隐藏 返回顶部按钮
        case homeTypes.DISAPPEAR_BTN:
            return state.set('showBackBtn', action.bool);
        // 页数变化 
        case homeTypes.CHANGE_PAGE_LIST:
            return state.set('nowPage',action.page);
        default:
            return state;
    }
}

export default reducer;