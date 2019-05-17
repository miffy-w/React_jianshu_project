import * as headerTypes from './createTypes';
import { fromJS } from 'immutable';

// 把原始数据变为 immutable 对象通过 fromJS 方法
const defaultState = fromJS({
    focus: false,
    list: []
});

function reducer(prevState = defaultState,action){

    switch (action.type){
        case headerTypes.IPTFOCUS:
            return prevState.set('focus', true);
        case headerTypes.IPTBLUR:
            return prevState.set('focus', false);
        case headerTypes.HOT_TAG_DATA:
            return prevState.set('list', action.data);
        
        default: return prevState;
    }
}

export default reducer;