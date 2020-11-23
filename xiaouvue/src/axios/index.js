import http from './axios'

//封装接口
// 封装前台轮播图获取接口
export function getBanner(){
    return http.get('/getbanner')
}
// 封装前台商品信息获取接口
export function getIndexGoods(){
    return http.get('/getindexgoods')
}
//封装获取分类树形结构接口
export function getCateTree(){
    return http.get('/getcatetree')
}
//封装获取商品分类详情接口
export function getGoods(params){
    return http.get('/getgoods',{
        params
    })
}
//封装获取商品信息接口
export function getGoodsInfo(params){
    return http.get('/getgoodsinfo',{
        params
    })
}
//封装获取会员注册信息接口
export function getRegister(data){
    return http.post('/register',data)
}
//封装获取会员登录信息接口
export function getLogin(data){
    return http.post('/login',data)
}
//封装获取购物车列表接口
export function getCartList(params){
    return http.get('/cartlist',{
        params
    })
}
//封装获取会员登录信息接口
export function getCartAdd(data){
    return http.post('/cartadd',data)
}
//封装获取会员登录信息接口
export function getCartDelete(data){
    return http.post('/cartdelete',data)
}