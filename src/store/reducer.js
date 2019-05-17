import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/Header/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;