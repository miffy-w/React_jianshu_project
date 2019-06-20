import * as headerTypes from './createTypes';
import { fromJS } from 'immutable';

// 把原始数据变为 immutable 对象通过 fromJS 方法
const defaultState = fromJS({
    isFocus: false,
    mouseIn: false,         // 这个变量是为了 当鼠标在 hotTagView 框里点击时 不会被隐藏；只有鼠标离开时才隐藏掉
    list: [],
    page: 1,        // 当前一共有多少页
    totalPage: 1
});

function reducer(prevState = defaultState,action){

    switch (action.type){
        case headerTypes.IPTFOCUS:
            return prevState.set('isFocus', true);
        case headerTypes.IPTBLUR:
            return prevState.set('isFocus', false);
        case headerTypes.HOT_TAG_DATA:
            return prevState.merge({        // 弥补多个 set 设置的缺陷
                list: action.data,
                totalPage: action.totalPage
            });
            // return prevState.set('list', action.data).set('totalPage', action.totalPage);
        case headerTypes.MOUSE_ENTER:           // 鼠标进入，变成 true
            return prevState.set('mouseIn', true);
        case headerTypes.MOUSE_LEAVE:           // 鼠标离开，又变回 false
            return prevState.set('mouseIn', false);
        case headerTypes.SWITCH_TAGS:               // hotTag 换一批操作
            return prevState.set('page',action.page);
        default: return prevState;
    }
}

export default reducer;