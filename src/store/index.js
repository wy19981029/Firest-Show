import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  phones:[],
	  pading:false
  },
  getters:{
	getpading(state){
		return state.pading
	}  
  },
  mutations: {
	addcars(state,item){
		let a =true
		state.phones.forEach((goods)=>{
			if(goods.name==item.name){
				goods.num+=item.num
				a=false
			}
		})
		if(a){
			state.phones.push(item)
		}

	}
  },
  actions: {
  },
  modules: {
  }
})
