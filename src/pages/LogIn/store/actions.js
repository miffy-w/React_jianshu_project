import axios from 'axios';
import { loginTypes } from './index';

function sendSignState(login,data){
	// 浏览器存储：
	sessionStorage.setItem('userPass',data)
	return {
		type: loginTypes.SIGN_STATE,
		login
	}
}

// 检验账号或密码错误：
function testSignInInfo(textVal, passVal) {
	var txtReg = /(^\w{5,16}@\w{2,6}\.com$)|(^1\d{10})/,
		pasReg = /.{6,16}/;
	if (!txtReg.test(textVal) || !pasReg.test(passVal)) {
		return false;
	}
	return true;
}

// 通用组件里 点击“退出”时 isLogin 的变化：
export const signOut = () => {
	// 退出后，移除存储数据
	sessionStorage.removeItem('userPass');
	return {
		type: loginTypes.SIGN_OUT,
		isLogin: false
	}
};

// 注册/登录组件发送请求获取注册结果：
export const signTest = (object) => {
	var { phone, password } = object,
		bool = testSignInInfo(phone, password);
	return (dispatch) => {
		if(bool){
			var url = object.nickname ? 
				`/api/login.json?nickname=${object.nickname}&account=${phone}&password=${password}` : 
				`/api/login.json?&account=${phone}&password=${password}`;
			axios.get(url)
			.then((res) => {
				if (res.data.login) {
					// 这里注册成功之后，与登录成功后操作一样，让 Header 组件的“登录”变成“退出”
					dispatch(sendSignState(res.data.login, JSON.stringify({
						// 用户信息：
						phone,
						password
					})));
				} else {
					alert("注册失败！");
				}
			}).catch((err) => console.log(err));
		}else{
			alert("账号或密码输入有误！");
		}
	}
}

// 刷新改变再次改变 isLogin 的值
export const changeLogin = () => ({
	type: loginTypes.CHANGE_LOGIN,
	isLogin: true
});


// 验证输入的账号格式对不对
export const testTextValue = (value) => {
	var reg = /(^\w{16}@\w{2,6}\.com$)|(^1\d{10})/,
		obj = {
			type: loginTypes.TEST_TEXT_VALUE,
			bool: true
		};
	if (!reg.test(value)) {
		obj.bool = false;
	}
	return obj;
}
