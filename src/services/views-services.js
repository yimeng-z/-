
/**
 * product-service.js Created by SmallFour on 2019/10/22/14:16
 */

// 第二个文件：M层

/*
* M : 数据
* V： 视图
* C： 业务逻辑层
* */

import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  // list方法
  list () {
    return _http.request({
      url: 'banner/list'
    })
  }
  //first_list方法
  first(){
    return _http.request({
      url:"shop/goods/list",
    })
  }
  // detail方法
  detail (productId) {
    return _http.request({
      type: 'post',
      url: 'shop/goods/detail',
      data: {
        id: productId
      }
    })
  }
  //精选专题
  jingxuan(){
    return _http.request({
      url:"cms/news/list"
    })
  }
  //精选专题数据
  jingxuanlist(productId){
    return _http.request({
      type: 'post',
      url: 'cms/news/detail',
      data: {
        id: productId
      }
    })
  }
  //分类
  fenlei(){
    return _http.request({
      url:"shop/goods/category/all"
    })
  }
}

export default Product
