<!--  -->
<template>
<div class='login'>
    <p>账号登陆</p>
    <p>kraon - welcome</p>
    <input type="text" placeholder="手机号码" name="" id="">
    <input type="text" placeholder="密码" name="" id="">
    <p>登陆</p>
    <p>忘记密码</p>
    <a href="/"> 还没有注册?立即注册</a>
   
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
// axios
//   .get('https://api.it120.cc/small4/verification/pic/get', 
//   {
//     responseType: 'arraybuffer'
//   })
//   .then(response => {
//     console.log(111111111)
//     console.log( 'data:image/png;base64,' + btoa(
//       new Uint8Array(response.data)
//         .reduce((data, byte) => data + String.fromCharCode(byte), '')
//     ))
//   })
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>