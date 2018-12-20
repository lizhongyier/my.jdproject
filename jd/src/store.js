import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	input1: '',
  	input2:'',
  	path1:''

  },
  mutations: {
  	judge(state,input1){
  		if(state.input1!=null){
  		return	this.state.path1="/admin"
  		}
  	}

  },
  actions: {

  }
})
