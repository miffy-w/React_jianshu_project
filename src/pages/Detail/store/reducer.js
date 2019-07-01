import { fromJS } from 'immutable';
import { detailTypes } from './index';

const defaultData = fromJS({
    contentData: '',
    id: 0
});

export default function reducer(state = defaultData,action){
    switch(action.type){
        case detailTypes.CONTENT_DATA: 
            return state.set('contentData',action.data);
        case detailTypes.SEND_ARTICLE_ID:
            return state.set('id',action.id);
        default:
            return state;
    }
}