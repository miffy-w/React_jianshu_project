import { fromJS } from 'immutable';
import { loginTypes } from './index';

const defaultState = fromJS({
	isLogin: false,
	// 用户密码与账号
	userInfo: ''
});

function reducer(state = defaultState,action){
	switch(action.type){
		// 登录或注册
		case loginTypes.SIGN_STATE:
			return state.set('isLogin',action.login);
		// 退出登录： 
		case loginTypes.SIGN_OUT:
			return state.set('isLogin',action.isLogin);
		// 登录后刷新页面，用户信息不会掉：
		case loginTypes.CHANGE_LOGIN:
			return state.set('isLogin',action.isLogin);
		default: 
			return state;
	}
}

export default reducer;