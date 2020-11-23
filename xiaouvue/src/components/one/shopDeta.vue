<template>
    <div>
       <div class="page">
        <!-- 表头 -->
        <header class="headcon">
            <div class="arrow">
                <a href="#" @click="$router.go(-1)"><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"></a>
            </div>
            <a href="#" class="logo">商品详情</a>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <div class="main">
            <div class="top">
                <img :src="goodsInfo.img ? $imgUrl+goodsInfo.img :'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg'" alt="pic1">
                <p>{{goodsInfo.goodsname}}</p>
                <span class="many">&yen;{{goodsInfo.price.toFixed(2)}}<i>(此价格不与套装优惠同时享受)</i></span>
            </div>
            <div class="cen">
                <div class="twen">
                    <p>
                        促销：<span>满减</span>满2件9折；3件8折
                    </p>
                    <a href="#"><img src="../../assets/images/arrow.jpg" alt="arrow"></a>
                </div>
                <div class="wwen">
                    <p>购买数量</p>
                    <van-stepper v-model="value" />
                </div>
                <div class="bwen">
                    <p>商品属性</p>
                    <a href="#"><img src="../../assets/images/arrow.jpg" alt="arrow"></a>
                </div>
                <p class="guig">{{goodsInfo.specsname}}
                    <van-tag type="warning" v-for="item in specsattr" :key="item.id">{{item}}</van-tag>
                </p>
            </div>
            <div class="bot">
                <h2>商品详情</h2>
                <img src="../../assets/images/picDetail_3.jpg" alt="pic3">
                <img src="../../assets/images/picDetail_4 .jpg" alt="pic4">
                <img src="../../assets/images/picDetail_5.jpg" alt="pic5">
                <img src="../../assets/images/picDetail_6.jpg" alt="pic6">
                <img src="../../assets/images/picDetail_7.jpg" alt="pic7">
            </div>
            <div class="bet">
                <div class="betop">
                    <h2>商品评价</h2>
                </div>
                <div class="becen">
                    <p>1235668fg</p>
                    <p>效果很好,物流到位,下次继续来!</p>
                    <p>
                       <img src="../../assets/images/picDetail_8.jpg" alt="pic8"> 
                       <img src="../../assets/images/picDetail_9.jpg" alt="pic9"> 
                       <img src="../../assets/images/picDetail_10.jpg" alt="pic10"> 
                    </p>
                    <p class="time">2020-01-03</p>
                </div>
                <div class="bebot">
                    <p>共1000+评论</p>
                    <a href="#">查看更多 ></a>
                </div>
            </div>
        </div>
        <!-- footer -->
        <footer class="footbox clearfix">
              <van-goods-action>
                <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
                <van-goods-action-button type="warning" text="加入购物车" @click="addInfo"/>
                <van-goods-action-button type="danger" text="立即购买" />
              </van-goods-action>
        </footer>
    </div>
    </div>
</template>
<script>
import { getGoodsInfo,getCartAdd } from "../../axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodsInfo: [],
      value: 1,
      specsattr: [],
    };
  },
  mounted() {
    this.getGoodsInfoAction();
  },
  methods: {
    getGoodsInfoAction() {
      getGoodsInfo({
        id: this.$route.query.id,
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
          this.specsattr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
        }
      });
    },
    addInfo(){
      if(sessionStorage.getItem('userInfo')){
        getCartAdd({
          uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
          goodsid:this.goodsInfo.id,
          num:this.value
        }).then(res=>{
          Toast.success(res.msg)
          this.$router.push({
            path:'/cart',
            query:{
              id:JSON.parse(sessionStorage.getItem('userInfo')).uid
            }
          })
        })
      }else{
        Toast.fail('没有登录请先登录')
        this.$router.push('/login')
      }
    }
  },
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.page .headcon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.85rem;
  padding: 0 0.23rem;
  border-bottom: 1px solid #e4e4e4;
}
.page .headcon .menu {
  display: flex;
  justify-content: space-between;
  width: 0.59rem;
}
.page .headcon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background: #101010;
}
.page .footbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.17rem;
  background: #fff;
  border-top: 1px solid #ececec;
  padding: 0 0.5rem;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
.page .footbox a {
  display: block;
  text-align: center;
}
.page .footbox a img {
  width: auto;
  height: 0.53rem;
}
.page .footbox a p {
  margin-top: 0.11rem;
  font: 0.2rem "微软雅黑";
  color: #878787;
}
.page .footbox a .shouy {
  color: #ff6d17;
}
.page .headcon {
  background: #f26b11;
  padding-top: 0.41rem;
}
.page .headcon .arrow a img {
  margin-top: 0.1rem;
}
.page .headcon a {
  display: block;
  font: 0.35rem "微软雅黑";
  color: #fbfffa;
}
.page .headcon .menu span {
  background: #fff;
}
.page .main {
  background: #f0f0f0;
  width: 100%;
}
.page .main .top {
  background: #fff;
}
.page .main .top img {
  width: 100%;
  height: auto;
}
.page .main .top .pic1 {
  width: 100%;
  height: auto;
}
.page .main .top p {
  margin-left: 0.23rem;
  margin-top: 0.37rem;
  font: 0.3rem/0.47rem "微软雅黑";
  color: #333333;
}
.page .main .top span {
  font: 0.3rem/0.47rem "Arial";
  color: #e43a3b;
  margin-left: 0.23rem;
}
.page .main .top span i {
  font: 0.22rem "微软雅黑";
  color: #878787;
  margin-left: 0.17rem;
}
.page .main .cen {
  background: #fff;
  margin-top: 0.17rem;
}
.page .main .cen .twen {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 1rem;
  margin-left: 0.24rem;
  border-bottom: 1px solid #f1f1f1;
}
.page .main .cen .twen p {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #474747;
}
.page .main .cen .twen p span {
  width: 0.66rem;
  height: 0.37rem;
  border: 1px solid #b0281a;
  font: 0.2rem/0.37rem "微软雅黑";
  color: #b0281a;
  border-radius: 0.03rem;
  margin-left: 0.2rem;
  margin-right: 0.15rem;
}
.page .main .cen .twen a img {
  width: 0.35rem;
  height: 0.21rem;
  margin-top: 0.37rem;
}
.page .main .cen .wwen {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 1rem;
  margin-left: 0.24rem;
  border-bottom: 1px solid #f1f1f1;
}
.page .main .cen .wwen p {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #474747;
}
.page .main .cen .wwen div {
  width: 2.12rem;
  border-radius: 0.03rem;
  margin-top: 0.25rem;
}
.page .main .cen .wwen div a {
  display: inline-block;
  width: 0.62rem;
  text-align: center;
  font: 0.28rem/0.57rem "微软雅黑";
  color: #454545;
}
.page .main .cen .wwen div .box1 {
  width: 0.8rem;
  height: 0.57rem;
  border-left: 1px solid #505050;
  border-right: 1px solid #505050;
}
.page .main .cen .bwen {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  margin-left: 0.24rem;
}
.page .main .cen .bwen p {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #474747;
}
.page .main .cen .bwen a img {
  width: 0.35rem;
  height: 0.21rem;
  margin-top: 0.37rem;
}
.page .main .cen .guig {
  width: 4.15rem;
  height: 0.62rem;
  font: 0.24rem "微软雅黑";
  color: #b4b4b4;
  margin-top: 0.28rem;
  margin-left: 0.25rem;
  padding-bottom: 0.38rem;
}
.page .main .cen .guig .gug {
  display: inline-block;
  width: 1.5rem;
  height: 0.6rem;
  background: #e43a3d;
  border-radius: 0.03rem;
  color: #fff;
  font: 0.28rem/0.6rem "微软雅黑";
  text-align: center;
  margin-left: 0.7rem;
}
.page .main .cen .guig .gui {
  display: inline-block;
  width: 1.16rem;
  height: 0.6rem;
  background: #e1e1e3;
  border-radius: 0.03rem;
  color: #fff;
  font: 0.28rem/0.6rem "微软雅黑";
  text-align: center;
  margin-left: 0.15rem;
}
.page .main .bot {
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
}
.page .main .bot h2 {
  font: 0.3rem/1rem "微软雅黑";
  color: #454545;
  margin-left: 0.25rem;
}
.page .main .bot img {
  width: 100%;
  height: auto;
}
.page .main .bet {
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
}
.page .main .bet .betop {
  width: 6.8rem;
  height: 0.6rem;
  border-bottom: 1px solid #eeeeee;
  margin-left: 0.2rem;
  padding-top: 0.35rem;
}
.page .main .bet .betop h2 {
  font: 0.3rem "微软雅黑";
  color: #454545;
}
.page .main .bet .becen {
  width: 6.8rem;
  height: 3.77rem;
}
.page .main .bet .becen p {
  font: 0.26rem "微软雅黑";
  color: #454545;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.page .main .bet .becen p img {
  width: 1.54rem;
  height: auto;
}
.page .main .bet .becen .time {
  color: #9a9a9a;
}
.page .main .bet .bebot {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 0.92rem;
  border-top: 1px solid #eeeeee;
}
.page .main .bet .bebot p {
  font: 0.24rem/0.92rem "微软雅黑";
  color: #a2a2a2;
  margin-left: 0.2rem;
}
.page .main .bet .bebot a {
  display: inline-block;
  font: 0.24rem/0.92rem "微软雅黑";
  color: #a2a2a2;
}
.page .footbox {
  display: flex;
  justify-content: space-between;
  height: 1.14rem;
  padding: 0;
  padding-left: 0.5rem;
}
.page .footbox a {
  position: relative;
}
.page .footbox a p {
  margin-top: 0;
}
.page .footbox a .shouy {
  color: #868686;
}
.page .footbox a .yuan {
  background: #e23a39;
  border-radius: 50%;
  font: 0.19rem/1.26 "Arial";
  color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 0.08rem;
}
.page .footbox .rihe {
  margin-left: 0.12rem;
}
.page .footbox .rihe .jir {
  display: inline-block;
  width: 2.88rem;
  height: 1.14rem;
  background: #f26b11;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
}
.page .footbox .rihe .lij {
  display: inline-block;
  width: 2.88rem;
  height: 1.14rem;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  background: #e43a3d;
}
.van-tag {
  margin: auto 5px;
}
</style>