import { fromJS } from 'immutable';
import { homeTypes } from './index';

// 把原始数据变为 immutable 对象通过 fromJS 方法
const defaultState = fromJS({
    listData: [],
    listPage: 1,
    recommendData: [],
    writerData: [],
    showAuthorNum: 5,      // 推荐作者一次展示几个
    showBackBtn: false
});

function reducer(state = defaultState, action) {

    switch (action.type) {
        case homeTypes.GET_LIST_DATA:
            return state.merge({
                listData: action.listData,
                recommendData: action.recommendData,
                writerData: action.writerData,
            });
        case homeTypes.GET_MORE_LIST:
            return state.set('listData',state.get('listData').concat(action.data)).set('listPage',action.page);
        case homeTypes.SHOW_BTN: 
            return state.set('showBackBtn',action.bool);
        case homeTypes.DISAPPEAR_BTN:
            return state.set('showBackBtn', action.bool);
        default:
            return state;
    }
}

export default reducer;