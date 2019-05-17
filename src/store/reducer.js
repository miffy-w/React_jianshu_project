import { combineReducers } from 'redux-immutable';          // 把 state 变成 immutable 对象
import { reducer as headerReducer } from '../common/Header/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;