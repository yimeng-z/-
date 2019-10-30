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
        addcar: [],
        tokens: [],
        truechecks: [],
        allcheck:false,
        orderNumber:{},
        //添加的地址
        address:[]
    },
    mutations: {
        jingxuan(state, data) {
            state.jingxuanlist = data
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
        carlist(state, data) {
            function deepClone (data) { 
                let str = JSON.stringify(data)
                let par = JSON.parse(str)
                return par
             }
             let newa = deepClone(data)
            let obj1 = state.addcar.findIndex((i) => {
                return i.colorid == newa.colorid
            })
            let obj2 = state.addcar.findIndex((i) => {
                return i.sizeid == newa.sizeid
            })
            if (obj1 == -1 || obj2 == -1) {
                state.addcar.push(newa)
            } else if (obj1 !== -1 || obj2 !== -1) {
                state.addcar[obj1].num = state.addcar[obj1].num + newa.num
            }
        },
        addnums(state, data) {
            state.addcar[data].num++
        },
        jiannums(state, data) {
            if (state.addcar[data].num > 1) {
                state.addcar[data].num--
            } else if (state.addcar[data].num < 1) {
                state.addcar[data].num = 1
            }
        },
        token(state, data) {
            console.log(data)
            state.tokens.push(data)
            console.log(state.tokens)
        },
        showcheck(state) {
            state.addcar.forEach(v => {
                v.check = !v.check;
                state.allcheck = v.check;
            });
        },
        checkdel(state){
            let obj=state.addcar.filter(v=>{
                return v.check==false
            })
            state.addcar=obj
        }
    },
    getters: {
        checkprice(state) {
            let sum = 0
            state.addcar.forEach(v => {
                if (v.check == true) {
                    return sum += v.price * v.num
                }
            })
            return parseInt(sum) 
        },
        checkstr(state){
            let checktrue= state.addcar.filter(v=>{
                return v.check==true
            })
            return checktrue
        }

    },
})
export default store