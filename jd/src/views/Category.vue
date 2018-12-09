<template>
	<div class="box">
		<h1>分类</h1>
		
		 <section>
    <btn type="primary" @click="open1=true">Large Modal</btn>
    <btn type="primary" @click="open2=true">Small Modal</btn>
    <modal v-model="open1" title="Modal Title" size="lg">
      <p>This is a large modal.</p>
    </modal>
    <modal v-model="open2" title="Modal Title" size="sm">
      <p>This is a small modal.</p>
    </modal>
  </section>
		
		
		<footerbar></footerbar>	
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	export default{
		 data () {
      return {
        open1: false,
        open2: false
      }
   },
		components:{
			Footerbar
			
		}
	}
</script>

<style>
</style>