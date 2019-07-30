import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware , compose} from 'redux';

// 使用 redux-devTools 调试工具：
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
export const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
