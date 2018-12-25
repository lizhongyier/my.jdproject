<template>
   <div class="sswiper">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../assets/images/swiper_1.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/images/swiper_2.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/images/swiper_3.jpg">
			</div>
			<div class="swiper-slide">
				<img src="../assets/images/swiper_4.jpg">
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	</div>

</template>

<script>
import Swiper from "swiper"
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
//			console.log("初始化轮播图！");
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});

		}
	}
</script>

<style>
	@import url("../assets/css/swiper.css");
	/*轮播图*/
	
	.sswiper .swiper-container {}
	
	.sswiper .swiper-container a {
		display: block;
	}
	
	.sswiper .swiper-container img {
		width: 100%;
	}
</style>