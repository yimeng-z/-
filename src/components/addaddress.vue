<!--  -->
<template>
  <div class="addaddress">
    <p @click="back" class="purchase_back">
      <i class="el-icon-arrow-left"></i>
      <span>新增地址</span>
    </p>
    <div class="addaddress_bottom">
      <p>
        <span>联系人</span>
        <input type="text" v-model="user" placeholder="姓名" name id />
      </p>
      <p>
        <span>手机号码</span>
        <input type="text" v-model="phone" placeholder="11位手机号码" maxlength="11" name id />
      </p>
      <div @click="show=true" class="chose_address">
        <p>选择地区</p>
        <div>
          <p v-for="(v,i) in address" :key="i">{{v.name}}</p>
        </div>
      </div>
      <div class="address">
        <van-popup v-model="show" position="bottom" :style="{height:'40%',width:'100%'}">
          <van-area @cancel="quxiao" @confirm="getaddress" :area-list="san" />
        </van-popup>
      </div>
      <p>
        <span>选择地址</span>
        <input type="text" v-model="door" placeholder="街道门牌信息" name id />
      </p>
      <p>
        <span>邮政编码</span>
        <input type="text" v-model="express" placeholder="邮政编码" name id />
      </p>
      <button @click="keeps">保存</button>
      <button>从微信读取</button>
      <button>取消</button>
      <!-- <el-button type="success">保存</el-button>
      <el-button type="danger">从微信读取</el-button>
      <el-button type="info">取消</el-button>-->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Product from "../services/views-services";
import sanji from "../utils/sanji";
const _product = new Product();
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      user: "",
      phone: "",
      door: "",
      express: "",
      show: false,
      san: sanji,
      address: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    back() {
      this.$router.go(-1);
    },
    quxiao() {
      this.show = false;
    },
    getaddress(val) {
      this.address = val;
      console.log(this.address[0].name);
      console.log(this.address[1].name);
      // console.log(this.address)
    },
    keeps() {
      let obj = {
        user: this.user,
        phone: this.phone,
        
        door: this.door,
        express: this.express
      };
      _product.getorder(obj).then(res => {
        console.log(res);
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
  font-size: 0.16rem;
  list-style: none;
}
.purchase_back {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  top: 0;
  background-color: #fff;
  i {
    margin-left: 0.2rem;
    font-size: 0.3rem;
  }
  span {
    margin-left: 2.4rem;
  }
}
.addaddress_bottom {
  margin-top: 0.9rem;
}
</style>