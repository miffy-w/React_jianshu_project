import { fromJS } from 'immutable';
import { homeTypes } from './index';

// 把原始数据变为 immutable 对象通过 fromJS 方法
const defaultState = fromJS({
    listData: [],
    recommendData: [],
    writerData: []
});

function reducer(state = defaultState, action) {

    switch (action.type) {
        case homeTypes.GET_LIST_DATA:
            return state.merge({
                listData: action.listData,
                recommendData: action.recommendData,
                writerData: action.writerData
            });
        default:
            return state;
    }
}

export default reducer;