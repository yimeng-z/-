import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        jingxuanlist: [],
        //分类数据
        list: [],
        //筛选
        other: [],
        otherlist: [],
        addcar:[],
        tokens:"",
    },
    mutations: {
        jingxuan(state, data) {
            state.jingxuanlist = data
            console.log(state.jingxuanlist)
        },
        list(state, data) {
            state.list = data
        },
        other(state, data) {
            state.other = data
        },
        otherlist(state, v) {
            let index = state.list.findIndex(item => {
                return item.name == v;
            });
            state.otherlist = state.list.filter(item => {
                return item.pid == state.list[index].id;
            });
            console.log(state.otherlist);
        },
        carlist(state,data){
            state.addcar.push(data)
            console.log(state.addcar)
        }
    },
    getters: {
    },
})
export default store