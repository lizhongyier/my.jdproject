<template>
	<div class="adminlog-content">
		<el-input v-model="name" placeholder="用户名/邮箱/已验证手机" clearable></el-input>
		<div style="margin-top: 15px;">
			<el-input placeholder="请输入密码" type="password" v-model="pwd" clearable>
				<template slot="append"><span class="forgetpassword">忘记密码</span></template>
			</el-input>
		</div>
		<div class="login" :class="{'bgchange':loginEbable}" @click.prevent="login">登录</div>
		<div id="loadingToast" :class="{'toast-hidden':!loading}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">登录中</p>
			</div>
		</div>
		<div id="toast" class="toast-hidden">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">已完成</p>
			</div>
		</div>

		<div class="loginway"><span class="way1">账号密码登录</span><span class="way2">手机快速注册</span></div>
		<div class="otherway">
			<p>其他登录方式</p>
			<i class="fa fa-qq fa-4x"></i>
			<p>登录即代表您已同意
				<a href="#">京东隐私政策</a>
			</p>
		</div>

	</div>
</template>

<script>
	import axios from "axios";
	import qs from "qs";
	export default {
		data() {
			return {
				loginUrl: "http://api.niyinlong.com/index.php/api/index/login",
				name: "",
				pwd: "",
				loading:false,
			}
		},
		computed: {
			loginEbable() {
				if(this.name.length >= 5 && this.pwd.length >= 5) {
					console.log(true)
					return true;
				} else {
					console.log(false)
					return false;
				}
			}
		},
		methods: {
			login() {
				
				if (this.loginEbable) {
					this.loading = true;
				axios.post(this.loginUrl, qs.stringify({
					name: this.name,
					pwd: this.pwd
				})).then(res => {
					alert(res.data.msg);
					if(res.data.code>0){
					this.$store.commit('setLoginState',true);
					// 控制登录后该去的地方
					switch(this.from){
								case '/cart':this.$router.push('/cart');break;
								case '/adminlogin':this.$router.push('/admin');break;
								default:this.$router.push('/');break;
						};
					this.$router.push('/')};
					this.loading=false;
				}).catch(err => {
					this.loading=false;
				});}
			},
		},
		created(){
			//来自于哪儿
			this.from = this.$route.query.from;
		}
	}
</script>

<style>
	.adminlog-content {
		margin-top: 50px;
		width: 100%;
		padding: 15px;
	}
	.toast-hidden {
		opacity: 0!important;
		display: none!important;
	}
	.bgchange {
		background-image: linear-gradient(90deg, #f10000, #ff2000 73%, #ff4f18)!important;
	}
	
	.adminlog-content .el-input__inner {
		border-radius: 0px;
		border-style: solid;
		border-width: 0px 0px 1px 0px;
	}
	
	.adminlog-content .el-input-group__append {
		background-color: #FFFFFF!important;
		border-style: solid!important;
		border-width: 0px 0px 1px 0px!important;
		border-radius: 0px;
	}
	
	.forgetpassword {
		display: block;
		border-style: solid;
		border-width: 0px 0px 0px 1px;
		padding-left: 10px;
	}
	
	.adminlog-content .login {
		margin-top: 40px!important;
		margin: 0 auto;
		width: 75%;
		height: 4.25rem;
		line-height: 4.25rem;
		background-color: #efefef;
		border-radius: 2.25rem;
		font-size: 1.75rem;
		color: #fff;
		background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
		box-shadow: 0 0.1rem 0.2rem 0 rgba(255, 62, 62, .2);
		text-align: center;
		font-family: PingFangSC-Semibold;
	}
	
	.adminlog-content .loginway {
		margin: 10px;
		overflow: hidden;
		zoom: 1;
	}
	
	.adminlog-content .loginway .way1 {
		float: left;
		color: #999;
		line-height: 3.22rem;
	}
	
	.adminlog-content .loginway .way2 {
		float: right;
		color: #999;
		line-height: 3.22rem;
	}
	
	.adminlog-content .otherway {
		width: 100%;
		color: #999;
		text-align: center;
	}
	
	.adminlog-content .otherway i {
		color: skyblue;
		margin: 15px;
	}
</style>