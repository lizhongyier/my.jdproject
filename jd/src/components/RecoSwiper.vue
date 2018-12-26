<template>
	<div class="reco-swiper">
		
	<div class="swiper-container ">
		<h3>相关推荐</h3>
		<div class="swiper-wrapper">
	    	<div class="swiper-slide"><img src="../../public/img5/re2.jpg" width="100%"/>
	    	<p>苹果</p>
	    	</div>
	        <div class="swiper-slide"><img src="../../public/img5/re3.jpg" width="100%"/>
	        <p>华为</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re4.jpg" width="100%"/>
	        <p>vivo</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re5.jpg" width="100%"/>
	        <p>苹果</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re6.jpg" width="100%"/>
	        <p>华为</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re7.jpg" width="100%"/>
	        <p>vivo</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re6.jpg" width="100%"/>
	        <p>苹果</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re2.jpg" width="100%"/>
	        <p>华为</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re3.jpg" width="100%"/>
	        <p>vivo</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re4.jpg" width="100%"/>
	        <p>苹果</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re5.jpg" width="100%"/>
	        <p>华为</p>
	        </div>
	        <div class="swiper-slide"><img src="../../public/img5/re6.jpg" width="100%"/>
	        <p>vivo</p>
	        </div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination1"></div>
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
	     var swiper = new Swiper('.reco-swiper .swiper-container', {
	      slidesPerView: 3,
	      slidesPerColumn: 2,
	      spaceBetween: 0,
	      pagination: {
	        el: '.reco-swiper .swiper-pagination',
//	        clickable: true,
	      },
	      autoplay: true
	    });
		}
	}
</script>

<style>
	@import url("../assets/css/swiper2.css");
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
      margin-top: 45px;
      margin-left: auto;
      margin-right: auto;
      border-style: solid;
      border-width: 1px 0px 1px 0px;
      border-color: #E3E3E3;
    }
    .reco-swiper .swiper-slide {
      font-size: 18px;
      background: #fff;
      height: 200px;
      text-align: center;

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
      padding: 5px;
      box-sizing: border-box;
    }
    .reco-swiper .swiper-slide img{
    	display:block;
    	width: 80px;
    }
</style>