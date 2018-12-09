<template>
	<div class="box">
		<button @click="$router.push('/')">首页</button>
		<button @click="$router.push({path:'/category'})">分类</button>
		<button @click="$router.push({name:'search',params:{userId:123},query:{plan:'private'}})">搜索</button>
		<button @click="$router.push({path:'search',params:{userId:123},query:{plan:'private'}})">搜索</button>
		<button>个人中心</button>
		<router-link to="/">首页</router-link>
		<router-link :to="{path:'/category'}">分类</router-link>
		<router-link :to="{name:'search',params:{userId:123},query:{plan:'private'}}">搜索</router-link>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped="scoped">
	button{
		margin: 20px;
		font: 16px "微软雅黑";
	}
</style>