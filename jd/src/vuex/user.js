export default{
	state:{
		login:JSON.parse(window.sessionStorage.getItem('jd_login_state'))?JSON.parse(window.sessionStorage.getItem('jd_login_state')).login:false,
		path:""
	},
	mutations:{
		setLoginState(state,val){
			state.login = val;
			window.sessionStorage.setItem('jd_login_state',JSON.stringify({login:val}))
		}
	},
	actions:{}
	
}
