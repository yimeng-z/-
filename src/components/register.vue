<!--  -->
<template>
  <div class="register">
    <p class="register_new">新用户注册</p>
    <p class="register_happey">很高兴您将成为商城的会员(注册只需一步)</p>
    <input class="login_input" type="text" v-model="phone" placeholder="手机号" name id />
    <br />
    <input class="login_input" type="text" v-model="pass" placeholder="密码" name id />
    <br />
    <input class="login_input" type="text" v-model="sure" placeholder="确认密码" name id />
    <br />
    <input class="login_input" type="text" v-model="user" placeholder="用户名" name id />
    <br />
    <input class="login_input" type="text" v-model="pic" placeholder="图形验证码" name id />
    <br />
    <img @click="change" :src="yanzheng" alt />
    <div>
      <input type="text" v-model="trueCode" name id />
      <p @click="get">获取验证码</p>
    </div>
    <p class="register_button" @click="siginnow">立即注册</p>
    <router-link to="/login" tag="p" style="color:blue">已有帐号?立即登录</router-link>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      yanzheng: "",
      phone: "",
      pass: "",
      sure: "",
      user: "",
      pic: "",
      time: "",
      trueCode:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    change() {
      this.time = new Date().getTime();
      axios
        .get(
          `https://api.it120.cc/small4/verification/pic/get?key=${this.time}`,
          {
            responseType: "arraybuffer"
          }
        )
        .then(response => {
          this.yanzheng =
            "data:image/png;base64," +
            btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
        });
    },
    get() {
      axios
        .post(
          `https://api.it120.cc/small4/verification/sms/get?mobile=${this.phone}&key=${this.time}&picCode=${this.pic}`
        )
        .then(res => {
          console.log(res);
        });
    },
    siginnow(){
      axios.post(`https://api.it120.cc/small4/verification/sms/check?mobile=${this.phone}&code=${this.trueCode}`).then(res=>{
        if(res.data.code==0){
          axios.post(`https://api.it120.cc/small4/user/m/register?mobile=${this.phone}&pwd=${this.pass}&code=${this.trueCode}`).then(res=>{
            this.$router.push({
              path:"/login"
            })
          })
        }
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let a = new Date().getTime();
    this.time = a;
    axios
      .get(
        `https://api.it120.cc/small4/verification/pic/get?key=${this.time}`,
        {
          responseType: "arraybuffer"
        }
      )
      .then(response => {
        this.yanzheng =
          "data:image/png;base64," +
          btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
      });
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
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.16rem;
}
.register {
  text-align: center;
  width: 95%;
  div {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 60%;
      margin-left: 1.2rem;
      height: 0.5rem;
      margin-top: 0.1rem;
      text-indent: 0.2rem;
      border-radius: 0.1rem;
      border: none;
      margin-bottom: 0.2rem;
      border: 1px solid #ddd;
    }
    p {
      width: 49%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: start;
      margin-left: 0.1rem;
    }
  }
}
.register_button {
  width: 20%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.1rem;
  margin-left: 2.6rem;
  color: white;
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  background: linear-gradient(to right, #fff 0%, #000 100%);
}
.login_input {
  width: 60%;
  height: 0.5rem;
  text-indent: 0.2rem;
  border-radius: 0.1rem;
  border: none;
  margin-bottom: 0.2rem;
  border: 1px solid #ddd;
}
.register_new {
  font-size: 0.3rem;
  font-weight: bold;
  text-align: start;
  margin-left: 1rem;
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
}
.register_happey {
  color: gray;
  margin-bottom: 0.3rem;
}
</style>