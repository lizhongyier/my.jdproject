import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import User from './views/User.vue'
import Product from './views/ProductDetail.vue'
import Goods from './components/Goods.vue'
import Detail from './components/Detail.vue'
import Comment from './components/Comment.vue'
import Recommend from './components/Recommend.vue'
import Routerdemo from './views/Routerdemo.vue'
import Admin from './views/Admin.vue'
import AdminAside from './components/AdminAside.vue'
import AdminHeader from './components/AdminHeader.vue'
import AdminContent from './components/AdminContent.vue'
import Folder from './components/Folder.vue'
import Store from './components/Store.vue'
import Footint from './components/Footint.vue'
import Discount from './components/Discount.vue'
import Payway from './components/Payway.vue'
import Addpay from './components/Addpay.vue'
import Mymail from './components/Mymail.vue'
import Message from './components/Message.vue'
import AuthoritySet from './components/AuthoritySet.vue'
import Countset from './components/Countset.vue'
import Countbind from './components/Countbind.vue'
import AfterSale from './components/AfterSale.vue'
import Address from './components/Address.vue'
import Manngepass from './components/Manngepass.vue'
import Prolist from './views/Prolist.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/category',
			name: 'category',
			component: Category
		},
		{
			path: '/search',
			name: 'search',
			component: Search
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/prolist',
			name: 'prolist',
			component: Prolist
		},

		{
			path: '/product/:id',
			name: 'product',
			component: Product,
			children: [{
				path: 'goods',
				component: Goods
			}, {
				path: 'detail',
				component: Detail
			}, {
				path: 'comment',
				component: Comment
			}, {
				path: 'recommend',
				component: Recommend
			}]
		}, {
			path: 'router',
			name: 'Router',
			component: Routerdemo
		},
		{
			path: "/admin",
		name: "admin",
		component: Admin,
		children: [{
				path: '',
				components: {
					default: AdminContent,
					header: AdminHeader,
					aside: AdminAside

				}
			},
			{
				path: "folder",
				components: {
					default: Folder,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "store",
				components: {
					default: Store,
					header: AdminHeader,
					aside: AdminAside
				},
			}, {
				path: "footint",
				components: {
					default: Footint,
					header: AdminHeader,
					aside: AdminAside
				},
			}, {
				path: "discount",
				components: {
					default: Discount,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "payway",
				components: {
					default: Payway,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "addpay",
				components: {
					default: Addpay,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "mymail",
				components: {
					default: Mymail,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "message",
				components: {
					default: Message,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "authorityset",
				components: {
					default: AuthoritySet,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "countset",
				components: {
					default: Countset,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "countbind",
				components: {
					default: Countbind,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "aftersale",
				components: {
					default: AfterSale,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "address",
				components: {
					default: Address,
					header: AdminHeader,
					aside: AdminAside
				}
			}, {
				path: "manngepass",
				components: {
					default: Manngepass,
					header: AdminHeader,
					aside: AdminAside
				}
			}
			
		
		]
	}]
	
        });
        
router.beforeEach((to, from, next) => {
	// 	if(to.path=="/user"){
	// 		console.log(to);
	//
	// 		next({path:'/'})
	// 	}else{
	next();
	// 	}
})
router.afterEach((to, from) => {

})
export default router;