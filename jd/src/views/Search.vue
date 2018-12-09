<template>
	<div class="box">
		<h1>搜索</h1>

		<el-button :plain="true" @click="open">打开消息提示</el-button>
		<el-button :plain="true" @click="openVn">VNode</el-button>

		<footerbar></footerbar>
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	export default {
		components: {
			Footerbar

		},
		created() {
			console.log(this.$route)
			console.log(this.$router)
		},
		 methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  
	}
</script>

<style>

</style>