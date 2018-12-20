<template>
	<div class="adminlog-content">
		<el-input v-model="input1" placeholder="用户名/邮箱/已验证手机" clearable></el-input>
		<div style="margin-top: 15px;">
		<el-input placeholder="请输入密码" v-model="input2" clearable>
        <template slot="append"><span class="forgetpassword">忘记密码</span></template>
        </el-input>
		</div>
		<div class="login" @click="changepage">登录</div>
		<div class="loginway"><span class="way1">账号密码登录</span><span class="way2">手机快速注册</span></div>
		<div class="otherway">
			<p>其他登录方式</p>
			<i class="fa fa-qq fa-4x"></i>
			<p>登录即代表您已同意<a href="#">京东隐私政策</a></p>
		</div>

	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	export default {
	  data() {
	    return {
	    	input1:"",
	    	input2:"",
	    	path1:""
	    }
	  },
	  computed:{
	  	...mapState(['input1','input2',"path1"]),
	  	input1:{
//				set(path){console.log(path);this.switchTab(path)},
				get(){return this.$store.state.path1;},
			},
	  },
	  methods:{
	  	...mapMutations(['judge']),
	  	changepage(path1){
	  	if(this.input1!=""&&this.input2!=""){
  			this.path1="/admin";
  			this.$router.push(this.path1);
  		}
	  	}
	  }
	}
</script>

<style>
	.adminlog-content{
		margin-top: 50px;
		width: 100%;
		padding: 15px;
	}
	.adminlog-content .el-input__inner{
		border-radius: 0px;
		border-style: solid;
		border-width: 0px 0px 1px 0px;
	}
	.adminlog-content .el-input-group__append{
		background-color: #FFFFFF!important;
		border-style:solid!important;
		border-width: 0px 0px 1px 0px!important;
		border-radius: 0px;
	}
	.forgetpassword{
		display: block;
		border-style:solid;
		border-width:0px 0px 0px 1px;
		padding-left: 10px;
	}
	.adminlog-content .login{
		margin-top: 40px!important;
		margin: 0 auto;
		width: 75%;
	    height: 4.25rem;
	    line-height: 4.25rem;
	    background-color: #efefef;
	    border-radius: 2.25rem;
	    font-size: 1.75rem;
	    color: #fff;
	    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
	    box-shadow: 0 0.1rem 0.2rem 0 rgba(255,62,62,.2);
	    text-align: center;
	    font-family: PingFangSC-Semibold;
	}
	.adminlog-content .loginway{
		margin: 10px;
		overflow: hidden;
		zoom: 1;
	}
	.adminlog-content .loginway .way1{
		float: left;
		color: #999;
	    line-height: 3.22rem;	
	}
	.adminlog-content .loginway .way2{
		float: right;
		color: #999;
	    line-height: 3.22rem;	
	}
	.adminlog-content .otherway{
		width: 100%;
		color: #999;
		text-align: center;
	}
	.adminlog-content .otherway i{
		color: skyblue;
		margin: 15px;
	}
</style>