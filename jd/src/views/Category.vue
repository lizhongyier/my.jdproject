<template>
	<div class="box_category">
		<shoppingcartop><input type="search" class="searcher" @focus="show=true" placeholder="请搜索" /></shoppingcartop>
		<div class="categorybody weui-flex">
			<div  ref="aside" class="categoryleft" @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">
				<ul  ref="aside-ul" :style="{top:asideTop+'px'}" :class="{transition:transition}">
					<li class="slidetitle"  v-for="(item,index) in cate">
						<a :class="{active:cateIndex==index}" @click="cateIndex=index;getContentList(item.id);" v-text="item.txt"></a>
					</li>
				</ul>
			</div>
			
			<div class="rightbox" ref="rightbox" @touchstart="asideTouchStartb" @touchmove="asideTouchMoveb" @touchend="asideTouchEndb">
			<div class="categoryright" ref="categoryright"  :style="{top:contentTop+'px'}" :class="{transition:transition}">
				<div class="catheader"><img :src="products.image" /></div>
				<div class="catbody">
					<div class="hotpro" v-for="(row,i) in products.category">
						<div class="hottitle" v-text="row.title">热卖推荐</div>
						<ul class="clear">
							<li v-for="(col,j) in row.list">
								<img :src="col.image" />
								<span v-text="col.name"></span>
							</li>
						</ul>
					</div>
				</div>
				</div>
			</div>
			
		</div>

		<footerbar></footerbar>
		<search-page v-model="show" @search="search"></search-page>
	</div>
</template>

<script>
	import Footerbar from "@/components/Footerbar.vue";
	import Shoppingcartop from "@/components/Shoppingcartop.vue";
	import SearchPage from "@/components/SearchPage.vue";
	export default {
		data() {
			return {
				show:false,
				cate: [{
					txt: "热门推荐",
					stchange:false,
					id:"1"
				},{
					txt: "家用电器",
					stchange:false,
					id:"2"
				},{
					txt: "电脑办公",
					stchange:false,
					id:"3"
				},{
					txt: "计生情趣",
					stchange:false,
					id:"4"
				},{
					txt: "美妆护肤",
					stchange:false,
					id:"5"
				},{
					txt: "个护清洁",
					stchange:false,
					id:"6"
				},{
					txt: "汽车用品",
					stchange:false,
					id:"7"
				},{
					txt: "京东超市",
					stchange:false,
					id:"8"
				},{
					txt: "男装",
					stchange:false,
					id:"9"
				},{
					txt: "男鞋",
					stchange:false,
					id:"10"
				},{
					txt: "女装",
					stchange:false,
					id:"11"
				},{
					txt: "女鞋",
					stchange:false,
					id:"12"
				},{
					txt: "母婴童装",
					stchange:false,
					id:"13"
				},{
					txt: "图书音像",
					stchange:false,
					id:"14"
				},{
					txt: "运动户外",
					stchange:false,
					id:"15"
				}, {
					txt: "内衣配饰",
					stchange:false,
					id:"16"
				}, {
					txt: "食品生鲜",
					stchange:false,
					id:"17"
				}, {
					txt: "酒水饮料",
					stchange:false,
					id:"18"
				}, {
					txt: "家具家装",
					stchange:false,
					id:"19"
				}, {
					txt: "家居厨具",
					stchange:false,
					id:"20"
				},{
					txt: "箱包手袋",
					stchange:false,
					id:"21"
				},{
					txt: "钟表珠宝",
					stchange:false,
					id:"22"
				} ],
				category: [{
					image: "/img4/cat1.png",
					category: [{
						title: '热门分类',
						list: [{
							image: "/img4/pic7.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic5.jpg",
							name: '手机'
						}, {
							image: "/img4/pic7.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic5.jpg",
							name: '手机'
						}, {
							image: "/img4/pic7.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic5.jpg",
							name: '手机'
						}]
					}, {
						title: '家电搜索',
						list: [{
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}]
					}]
				}, {
					image: "/img4/cat1.png",
					category: [{
						title: '家电搜索',
						list: [{
							image: "/img4/pic5.jpg",
							name: '手机'
						}, {
							image: "/img4/pic5.jpg",
							name: '手机'
						}, {
							image: "/img4/pic5.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic6.jpg",
							name: '手机'
						}, {
							image: "/img4/pic7.jpg",
							name: '手机'
						}, {
							image: "/img4/pic7.jpg",
							name: '手机'
						}, {
							image: "/img4/pic7.jpg",
							name: '手机'
						}]
					}, {
						title: '家电搜索',
						list: [{
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic2.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic3.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}, {
							image: "/img4/pic4.jpg",
							name: '热水壶'
						}]
					}]
				} ],
				products: [],
				cateIndex: 0,
				asideTop:0,
				asideTopTmp:0,
				asideStartY:0,
				transition:false,
				minTop:0,
				
				contentTop:0,
				contentTopTmp:0,
				contentStartY:0,
				contentminTop:0,

			}
		},
		components: {
			Footerbar,
			Shoppingcartop,
			SearchPage
		},
		methods: {
			search(val){
				console.log(val);
				this.$router.push({name:'search',params:{product:val}});
			},
			getContentList(id){
				console.log(id);
				this.products = { ...this.category[(Math.random() > 0.5 ? 0 : 1)]
				};
				console.log(this.products);
			},
			asideTouchStart(event){
//				console.log(event);
				this.asideStartY = event.changedTouches[0].clientY;
			},
			asideTouchStartb(event){
//				console.log(event);
				this.contentStartY = event.changedTouches[0].clientY;
			},
			asideTouchMove(event){
//				console.log(event);
				var y = event.changedTouches[0].clientY;
//				this.asideTop = (this.asideTopTmp + y-this.asideStartY)>150?150:(this.asideTopTmp + y-this.asideStartY);
				var t = this.asideTopTmp + y-this.asideStartY;
						// 限定上拉和下拉的阈值;
						t = t<this.minTop?this.minTop:t;
						t = t>150?150:t;
							
						this.asideTop = t;
			},
			asideTouchMoveb(event){
//				console.log(event);
				var y = event.changedTouches[0].clientY;
//				this.asideTop = (this.asideTopTmp + y-this.asideStartY)>150?150:(this.asideTopTmp + y-this.asideStartY);
				var t = this.contentTopTmp + y-this.contentStartY;
						// 限定上拉和下拉的阈值;
						t = t<this.contentminTop?this.contentminTop:t;
						t = t>150?150:t;
							
						this.contentTop = t;
			},
			asideTouchEnd(event){
				this.transition=true;
//				console.log(event);
				var y = event.changedTouches[0].clientY;
				this.asideTopTmp = this.asideTopTmp +  (y-this.asideStartY);
				
				this.asideTop = this.asideTop>0?0:this.asideTop;
				this.asideTop = this.asideTop<(this.minTop+150)?(this.minTop+150):this.asideTop;
				
				this.asideTopTmp = this.asideTop;
				this.asideStartY = y;
			},
			asideTouchEndb(event){
				this.transition=true;
//				console.log(event);
				var y = event.changedTouches[0].clientY;
				this.contentTopTmp = this.contentTopTmp +  (y-this.contentStartY);
				
				this.contentTop = this.contentTop>0?0:this.contentTop;
				this.contentTop = this.contentTop<(this.contentminTop+150)?(this.contentminTop+150):this.contentTop;
				
				this.contentTopTmp = this.contentTop;
				this.contentStartY = y;
			},

		},mounted(){
			//dom获取categoryleft的高和里面ul
			console.log(document.querySelector(".categorybody .categoryleft").clientHeight);
			console.log(document.querySelector(".categorybody .categoryleft ul").clientHeight);
			//vue获取categoryleft的高和里面ul
			console.log(this.$refs['aside'].clientHeight);
			console.log(this.$refs['aside-ul'].clientHeight);
			//向上的最小值
			this.minTop =  this.$refs['aside'].clientHeight-150 - this.$refs['aside-ul'].clientHeight;
			console.log(this.minTop);
		},
		created() {
			this.getContentList();
		},
		updated(){
			this.contentminTop =  this.$refs['rightbox'].clientHeight-150 - this.$refs['categoryright'].clientHeight;
		}
	}
</script>

<style>
	html,body,#app,.box_category{
		height: 100%;
	}
	.box_category .searcher {
		width: 70%;
		border-radius: 20px;
		font-size: 16px;
		padding-left: 10px;
		box-sizing: border-box;
		height: 30px;
		background-color: #EEEEEE;
		outline: none;
		border-style: solid;
		border-width: 0px;
	}
	.categorybody .categoryleft ul li a.active {
		display: block;
		width: 100%;
		color: red;
		padding: 15px 0px;
		margin: 0px;
		background-color: #FFFFFF;
	}
	.box_category .categorybody {
		height: 100%;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	.rightbox{
		position: relative;
		width: 80%;
		height: 100%;
		overflow: hidden;
	}
	.categorybody .categoryleft {
		position: relative;
		width: 20%;
		height: 100%;
		overflow: hidden;
	}
	.transition{
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	.categorybody .categoryright {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100%;
		/*padding: 45px 0px 50px;*/
		box-sizing: border-box;
	}
	
	.categoryright .catheader {
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
	}
	
	.categoryright .catheader img {
		width: 100%;
	}
	
	.categoryright .catbody .hottitle {
		width: 100%;
		height: 35px;
		font-size: 18px;
		line-height: 35px;
		padding-left: 10px;
	}
	
	.categoryright .catbody ul {
		width: 100%;
		padding: 5px;
		overflow: hidden;
		zoom: 1;
		text-align: center;
		list-style-type: none;
	}
	
	.categoryright .catbody ul li {
		width: 33%;
		padding: 5px;
		box-sizing: border-box;
		float: left;
	}
	
	.categoryright .catbody ul li img {
		width: 100%;
	}
	
	.categorybody .categoryleft ul {
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		margin: 0;
		padding: 0;
		list-style-type: none;
		text-align: center;
		box-sizing: border-box;
	}
	
	.categorybody .categoryleft ul li {
		font-size: 14px;
		color: #333333;
		box-sizing: border-box;
		background-color: #EEEEEE;
	}
	
	.categorybody .categoryleft ul li a {
		padding: 15px 0px;
		display: block;
		width: 100%;
		text-decoration: none;
		color: #333333;
		background-color: #EEEEEE;
	}
</style>