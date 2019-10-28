<!--  -->
<template>
  <div class="car">
    <div class="nonecart" v-show="!this.$store.state.addcar.length">暂时没有商品哦</div>
    <div v-show="this.$store.state.addcar.length" class="carlist">
      <p class="carlist_header">
        <span>编辑</span>
        <span>购物车</span>
      </p>
      <ul>
        <li v-for="(v,i) in this.$store.state.addcar" :key="i">
          <input type="checkbox" v-model="v.check" name id />
          <img :src="v.pic" alt />
          <div class="car_button">
            <p>{{v.name}}</p>
            <p>
              <span>{{v.size.name}}</span>
              <span>{{v.color.name}}</span>
            </p>
            <div>
              <p style="color:red">￥{{v.price}}</p>
              <p>
                <button>-</button>
                <span>{{v.num}}</span>
                <button>+</button>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car_order" v-show="this.$store.state.addcar.length"
     >
      <input type="checkbox" v-model="allcheck" name="" id="">
      <span>全选</span>
      <div>
        <span>
          合计：￥{{}}
        </span>
        <span class="order">下单</span>
      </div>
    </div>
    <div class="car_bottom">
      <p>猜你喜欢</p>
      <div class="cars_lists">
        <ul>
          <router-link
            :to="{path:'/detal',query:{id:v.id}}"
            v-for="(v,i) in list"
            :key="i"
            tag="li"
            class="renqi_list"
          >
            <img :src="v.pic" alt />
            <div>
              <p class="name" v-html="v.name"></p>
              <p class="miaoshu">{{v.characteristic}}</p>
              <p class="num">￥{{v.minPrice}}0</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Product from "../services/views-services";
const _product = new Product();
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      allcheck:true,
      list: [],
      suiji: parseInt(Math.random() * 27)
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    _product.first().then(res => {
      this.list = res.data.data.splice(this.suiji, 4);
      // console.log(this.list);
    });
    console.log(this.$store.state.addcar)
    this.$store.state.addcar.forEach(v=>{
      console.log(v)
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 0.16rem;
}
.car_order{
  width: 100%;
  margin: 0 auto;
  display: flex;
  height: 0.6rem;
  line-height: 0.6rem;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  background-color: #fff;
  input{
    margin-left: 0.2rem;
    
  }
  span{
    margin-left: 0.1rem;
  }
  div{
    display: flex;
    margin-top: 0.1rem;
    justify-content: space-between;
    width: 4.3rem;
    margin-left: 1rem;
  .order{
    width: 1.3rem;
    text-align: center;
    color: #fff;
    background-color: red;
  }
  }
}
.carlist {
  width: 100%;
  .carlist_header{
    width: 90%;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0 auto;
    span:nth-child(1){
      font-size: 0.25rem;
      color: red;
    }
    span:nth-child(2){
      font-size: 0.25rem;
      margin-left: 2rem;
    }
  }
  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0.1rem;
    li {
      width: 98%;
      margin: 0 auto;
      height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 1rem;
        height: 1rem;
        padding: 0.2rem;
      }
      .car_button {
        width: 80%;
        p:nth-of-type(2){
          color: gray;
        }
        div{
          width: 80%;
          display: flex;
          margin-top: 0.1rem;
          justify-content: space-between;
          button{
            width: 0.5rem;
            height: 0.4rem;
            background-color: #eee;
            border: none;
            border: 1px solid #eee;
          }
        }
      }
    }
  }
}
.car {
  width: 100%;
  .nonecart {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: #eee;
    color: gray;
    margin-bottom: 0.1rem;
  }
  .car_bottom {
    width: 100%;
    text-align: center;
    .cars_lists {
      width: 98%;
      margin: 0 auto;
      ul {
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;
        li {
          width: 48%;
          height: 3.5rem;
          position: relative;
          margin-left: 0.1rem;
          img {
            width: 3rem;
            height: 3rem;
          }
          div {
            position: absolute;
            top: 2.1rem;
            p {
              margin-top: 0.1rem;
              width: 3rem;
              overflow: hidden;
            }
            .name {
              height: 0.4rem;
              line-height: 0.4rem;
              background-color: goldenrod;
            }
            .miaoshu {
              width: 3rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .num {
              color: red;
              font-weight: bolder;
            }
          }
        }
      }
    }
  }
}
</style>