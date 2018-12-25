<template>
	<div class="reco-swiper">
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../../public/img5/re2.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re3.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re3.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re4.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re4.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re5.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re5.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re6.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re6.jpg"/></div>
			<div class="swiper-slide"><img src="../../public/img5/re7.jpg"/></div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
	</div>

	<!-- Swiper JS -->
	<!--<script src="../dist/js/swiper.min.js"></script>-->
</template>

<script>
	import Swiper from "swiper"
	export default{
		data(){
			return{}
		},
		mounted(){
	     var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      slidesPerColumn: 2,
	      spaceBetween: 30,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	    });
		}
	}
</script>

<style>
	@import url("../assets/css/swiper.css");
  body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .reco-swiper .swiper-container {
      width: 100%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
    }
    .reco-swiper .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: 200px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>