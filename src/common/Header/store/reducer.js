import * as headerTypes from './createTypes';
const defaultState = {
    focus: false
}

function reducer(prevState = defaultState,action){
    if (action.type === headerTypes.IPTFOCUS){
        return {
            focus: true
        }
    }
    if (action.type === headerTypes.IPTBLUR){
        return {
            focus: false
        }
    }
    return prevState;
}

export default reducer;