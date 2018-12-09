<template>
	<div class="mainbody">
		<ul>
			<li class="list_style" v-for="(item,index) in goods">
				<div class="box_left">
					<div class="check-box" :class="{'selected':item.selected}" @click="select(index)"></div>
				</div>
				<div class="image">
				<router-link :to="'/product/'+item.id"><img :src="item.image" /></router-link>
				</div>
				<div class="txt">
					<router-link :to="'/product/'+item.id">
					<p v-text="item.title" class="txeet"></p>
					</router-link>
				</div>
				<div class="iou">白条7期免息</div>
				<div class="price">
					￥<span v-text="item.price"></span>
				</div>
				<div class="box_right">
					<span class="minus" @click="item.count=item.count>0?--item.count:item.count">-</span>
					<span class="num" v-text="item.count"></span>
					<span class="plus" @click="item.count++">+</span>
				</div>

			</li>

		</ul>
		<div class="shoppingfoot">
			<div class="footleft">
				<div class="choose" :class="{'selected':all}" @click="selectAll"></div>
				<span>全选</span>
			</div>
			<div class="footcenter">
				<span class="money1">合计￥：</span>
				<span class="money2" v-text="money"></span>
			</div>
			<div class="footright">
				<b>去结算(<span v-text="total"></span>)</b>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				all: false,
				goods: [{
					id: 1,
					title: "FLOCOR飞科男士电动三环刀网水洗智能剃须刀",
					price: 222,
					image: "/img2/6.jpg",
					count:0,
					selected: false
				}, {
					id: 2,
					title: "好胃口食用玻璃餐盒330mml摔不烂赠送餐盒袋",
					price: 66,
					image: "/img2/7.jpg",
					count:0,
					selected: false
				}, {
					id: 3,
					title: "好妈妈家用蒸汽电熨斗防烫伤高温监控",
					price: 77,
					image: "/img2/8.jpg",
					count:0,
					selected: false
				}, {
					id: 4,
					title: "hero咖啡豆不锈钢手动研磨机细腻口感好",
					price: 333,
					image: "/img2/9.jpg",
					count:0,
					selected: false
				}],
				selected:[]
			}
		},
		methods: {
			select:function(index){
			       this.goods[index].selected = !this.goods[index].selected;
                   if(this.goods[index].selected) {
							var flag = false;
							for(var i = 0; i < this.selected.length; i++) {
								if(this.selected[i].id == this.goods[index].id) {
									flag = true;
								}
							}
							if(!flag)
								{this.selected.push(this.goods[index]);}
					} else {
							// 如果数组中确实有这个数据则删除
							for(var i = 0; i < this.selected.length; i++) {
								if(this.selected[i].id == this.goods[index].id) {
									this.selected.splice(i, 1);
								}
							}
						}
				if(this.goods.length == this.selected.length) {
							this.all = true;
						} else {
							this.all = false;
						}
					},
				selectAll: function() {
						this.all = !this.all;
						this.selected = [];
						if(this.all) {
							for(var i = 0; i < this.goods.length; i++) {
								this.selected.push(this.goods[i]);
								this.goods[i].selected = true;
							}
						} else {
							this.selected = [];
							for(var i = 0; i < this.goods.length; i++) {
								this.goods[i].selected = false;
							}
						}
						console.log(this.selected);
					}
				},
				computed: {
					total: function() {
						var sum = 0;
						for(var i = 0; i < this.selected.length; i++) {
							sum += this.selected[i].count;
						}
						return sum;
					},
						money: function() {
						var sum = 0;
						for(var i = 0; i < this.selected.length; i++) {
							sum += this.selected[i].count * this.selected[i].price;
						}
						return sum;
					}

			}
		}
</script>

<style>
	.check-box {
		width: 25px;
		height: 25px;
		background: url(../../public/img2/chooses.png) no-repeat center center;
		background-size: contain;
		
	}
	.mainbody a:-webkit-any-link {
		color:  #252525;
		text-decoration: none;
	}
	.mainbody{
		width: 100%;
		padding: 20px 30px;
		height: 1800px;
		padding: 40px;
		background-color: #EEEEEE;
		box-sizing: border-box;
	}
	.list_style{
		width: 100%;
		display: flex;
		height: 250px;
		padding: 15px;
		border-radius: 15px;
		padding:20px;
		box-sizing: border-box;
		margin-top: 20px;
		list-style-type: none;
		position: relative;
		background-color: #FFFFFF;
		border: 1px solid #999999;
	}
	.box_left{
		margin-top:100px ;
		width: 30px;
		height: 30px;
	}
	.image img{
		width: 160px;
		margin: 40px;
	}
	.txt{
		flex:1;
		margin:20px ;
		font:18px "微软雅黑";
	}
	.txt a{
		color: #333333;
		
	}
	.iou{
		width: 100px;
		height: 25px;
		font: 16px "微软雅黑";
		line-height: 25px;
		text-align: center;
		border: 2px solid red;
		border-radius: 20px;
		position: absolute;
		left: 300px;
		top: 100px;
	}
	.price{
		width: 80px;
		height: 30px;
		font:bolder 24px arial;
		text-align: center;
		line-height: 30px;
		color: red;
		position: absolute;
		left: 300px;
		bottom: 80px;
	}
	.box_right{
		width: 90px;
		height: 30px;
		margin: 180px 130px 20px 0;
	}
	.box_right span{
		display: inline-block;
		width: 30px;
		height: 30px;
		cursor: pointer;
		font: 18px arial;
		text-align: center;
		line-height: 30px;
	}
	.shoppingfoot{
		width: 100%;
		display: flex;
		height: 100px;
		border-radius: 15px;
		padding: 0 20px;
		box-sizing: border-box;
		background-color:#FFFFFF;
		position: fixed;
		bottom: 55px;
		z-index: 999;
	}
	.footleft{
		width: 150px;
		height: 100px;
		line-height: 100px;
		position: relative;
		margin-left: 20px;
	}
	.footleft .choose{
		width: 25px;
		height: 25px;
		background: url(../../public/img2/chooses.png) no-repeat center center;
		background-size: contain;
		margin-top: 35px;
	}
	.footleft span{
		position: absolute;
		top: 30px;
		right:30px;
		font: 30px "微软雅黑";
	} 
	.footcenter{
		position: absolute;
		left: 20%;
		width: 200px;
		height: 100px;
		font:bold 30px "微软雅黑";
		line-height: 100px;
		text-align: center;
	}
	.footright{
		width: 150px;
		height: 100px;
		font: 24px "微软雅黑";
		line-height: 100px;
		text-align: center;
		margin-right: 20px;
		background-color: red;
		color: #FFFFFF;
		position: absolute;
		right: 10px;
		border-radius: 0 15px 15px 0;
	}

	.box_right .num{
		background-color: rgba(0,0,0,.2);
	}
	.check-box.selected {
		background-image: url(../../public/img2/ok.png);
	}
	.choose.selected {
		background-image: url(../../public/img2/ok.png);
	}
</style>