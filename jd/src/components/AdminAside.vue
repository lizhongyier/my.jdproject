<template>
	<div class="aside_box">
	<el-row class="tac">
  <!--<el-col :span="12">-->
  	<i class="fa fa-user-o fa-5x photo"></i>
    <h2>个人中心</h2>
      <div class="menu_box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(0,0,0,.3)"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
        	<div class="slide">
          <i class="fa fa-cog fa-2x " ></i>
          <span class="transport">个人设置管理</span>
          </div>
        </template>
        <el-menu-item-group>
          <template slot="title">账号</template>
          <el-menu-item index="1-1">
          	<router-link to="/admin/countset">账号设置</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
          	<router-link to="/admin/countbind">账号绑定</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
          	<router-link to="/admin/address">地址管理</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="支付">
          <el-menu-item index="1-4">
          	<router-link to="/admin/payway">支付方式</router-link>
          </el-menu-item>
          <el-menu-item index="1-5">
          	<router-link to="/admin/addpay">添加支付方式</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-6">
          <template slot="title">
          	隐私设置
          </template>
          <el-menu-item index="1-6-1">
          	<router-link to="/admin/manngepass">密码管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-6-1">
          	<router-link to="/admin/authorityset">设置权限</router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item  index="2">
      	<div class="slide">
        <i class="fa fa-truck fa-2x"></i>
        <span slot="title" class="transport">
        	<router-link to="/admin/mymail">我的物流</router-link>
        </span>
        </div>
      </el-menu-item>
      <el-menu-item index="3">
      	<div class="slide">
        <i class="fa fa-commenting fa-2x "></i>
        <span slot="title" class="transport">
        	<router-link to="/admin/message">消息</router-link>
        </span>
        </div>
      </el-menu-item>
      <el-menu-item index="4">
      	<div class="slide">
        <i class="fa fa-smile-o fa-2x "></i>
        <span slot="title" class="transport">
        	<router-link to="/admin/aftersale">售后/服务</router-link>
        </span>
        </div>
      </el-menu-item>
    </el-menu>
      </div>
  <!--</el-col>-->
</el-row>


	</div>
</template>

<script>
	  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style >
	.tac{
		text-align: center;
		width: 260px;
	}
	.tac .photo{
		line-height: 100px;
		color: #FFFFFF;
	}
	
	.tac a:-webkit-any-link {
		color:  #FFFFFF;
		text-decoration: none;
	}
	.el-menu-item.is-active a {
		color:rgb(255, 208, 75);
	}
	.tac h2{
		color: #FFFFFF;
	}
	.menu_box{
		margin-top: 15px;
		height: 2000px;
		opacity: 0.7;
	}
	.menu_box .transport{
		font: 18px "微软雅黑";
		margin: 0 50px 0 10px;
	}
	.menu_box .slide{
		margin-left: 20px;
		width: 230px;
		text-align: left;
	}
	
</style>