<template>
  <div class="page" id="app">
    <header class="headcon">
      <a href="#" class="logo"
        ><img src="@/assets/images/logo.jpg" alt="logo"
      /></a>
      <input class="search" type="search" placeholder="寻找商品" />
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- 导航 -->
    <nav class="navbar">
      <ul class="clearfix">
        <li class="cur"><a href="#">推荐</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">鞋包</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">母婴儿童</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">果蔬</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
      </ul>
      <p class="arrow"></p>
    </nav>

    <div class="bannar">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="blue">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img :src="$imgUrl + item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <ul class="imenu">
      <li>
        <a href="#">
          <img src="../../assets/images/indexicon1.jpg" alt="#" />
          <p>限时抢购</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/indexicon2.jpg" alt="#" />
          <p>积分商城</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/indexicon3.jpg" alt="#" />
          <p>联系我们</p>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="jumpsort">
          <img src="../../assets/images/indexicon4.jpg" alt="#" />
          <p>商品分类</p>
        </a>
      </li>
    </ul>
    <!-- 限时秒杀 -->
    <div class="times">
      <div class="letime">
        <h2>限时秒杀</h2>
        <p class="god">每天零点场 好货秒不停</p>
        <div class="skr">
          <span>02</span>
          <em>:</em>
          <span>16</span>
          <em>:</em>
          <span>45</span>
          <div>
            <img class="bg" src="../../assets/images/bg.jpg" alt="bg" />
            <p class="msh">秒杀</p>
          </div>
        </div>
        <div class="yja">
          <img class="yijia" src="../../assets/images/shop_5.jpg" alt="yijia" />
          <p class="ren"><em>&yen;</em>14.8</p>
        </div>
      </div>
      <div class="ritime">
        <div class="ritop clearfix">
          <div class="letop fl">
            <h2>品牌上新</h2>
            <p>每日9点 抢大牌</p>
            <img src="../../assets/images/brand.jpg" alt="#" />
          </div>
          <div class="rito fl">
            <img src="../../assets/images/indexshop.jpg" alt="shop" />
          </div>
        </div>
        <div class="ribotom">
          <div class="lebo">
            <h2>每日十件</h2>
            <p>只为你选好货</p>
            <img src="../../assets/images/shop_2.jpg" alt="#" />
          </div>
          <div class="ribo">
            <h2>拼啊</h2>
            <p>超级好价拼团</p>
            <img src="../../assets/images/shop_3.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>
    <div class="nbv">
      <img src="../../assets/images/bar.jpg" alt="bar" />
    </div>
    <!-- main -->
    <div class="main">
      <div class="top">
        <van-tabs type="card">
          <van-tab title="发现新品">
            <van-card
              v-for="item in newList"
              :key="item.id"
              num="1"
              :price="item.price"
              :title="item.goodsname"
              :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
            />
          </van-tab>
          <van-tab title="热门推荐">
            <van-card
              v-for="item in hotList"
              :key="item.id"
              num="1"
              :price="item.price"
              :title="item.goodsname"
              :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
            />
          </van-tab>
          <van-tab title="所有商品">
            <van-card
              v-for="item in allList"
              :key="item.id"
              num="1"
              :price="item.price"
              :title="item.goodsname"
              :thumb="item.img?$imgUrl+item.img:'https://img.yzcdn.cn/vant/ipad.jpeg'"
            />
          </van-tab>
        </van-tabs>
      </div>
      <div class="bottom" style="margin-bottom: 2rem">
        <!-- <div class="one clearfix" v-for="item in goodList" :key="item.id">
          <div class="lebo fl">
            <a href="#">
              <img :src="item.img" alt="#" />
            </a>
          </div>
          <div class="ribo fl">
            <a href="#">
              <h3>{{ item.name }}</h3>
              <p>&yen;{{ item.price }}</p>
              <span>{{ item.num }}</span>
              <p class="ljq">
                <input type="submit" value="立即抢购" />
              </p>
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner, getIndexGoods } from "../../axios";
export default {
  data() {
    return {
      bannerList: [],
      newList: [],
      hotList: [],
      allList: [],
    };
  },
  mounted() {
    //一旦创建立即执行
    this.getbannerAction();
    this.getIndexGoodsAction();
  },
  methods: {
    //点击跳转分类
      jumpsort(){
        this.$router.push('/sort')
    },
    //封装轮播图函数
    getbannerAction() {
      getBanner().then((res) => {
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },
    //封装商品函数
    getIndexGoodsAction() {
      getIndexGoods().then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.newList = res.list[0].content;
          this.hotList = res.list[1].content;
          this.allList = res.list[2].content;
        }
      });
    },
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
body {
  background: #f1f1f1;
}
.txt {
  background: #fff;
}
.headcon {
  background: #fff;
}
.headcon .logo img {
  width: auto;
  max-height: 0.29rem;
}
.headcon .search {
  width: 3.04rem;
  height: 0.39rem;
  background: #eeeeee;
  border-radius: 0.06rem;
  font: 0.18rem/0.38rem "微软雅黑";
  color: #bfbfbf;
  text-align: center;
}
.navbar {
  background: #ffffff;
  position: relative;
  overflow: hidden;
}
.navbar ul {
  width: 20rem;
  padding-top: 0.23rem;
}
.navbar ul li {
  float: left;
  margin: 0 0.2rem;
}
.navbar ul li a {
  display: block;
  padding: 0 0 0.17rem;
  border-bottom: 0.04rem solid transparent;
  font: 0.28rem/0.32rem "微软雅黑";
  color: #2d2d2d;
}
.navbar ul li a:hover {
  border-bottom-color: #ff003e;
  color: #f00004;
}
.navbar ul .cur {
  position: relative;
}
.navbar ul .cur:after {
  content: "";
  position: absolute;
  right: -0.2rem;
  top: 0;
  width: 1px;
  height: 0.32rem;
  background: #f1f1f1;
}
.navbar ul .cur a {
  color: #ff003e;
  border-bottom-color: #f00004;
}
.navbar .arrow {
  position: absolute;
  right: 0;
  top: 0.11rem;
  width: 0.75rem;
  height: 0.59rem;
  background: #ffffff url(../../assets/images/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
/* 前景图 */
.bannar img {
  width: 100%;
  height: 4rem;
}
.imenu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1.79rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
}
.imenu li {
  text-align: center;
}
.imenu li a {
  display: block;
}
.imenu li a img {
  width: auto;
  height: 0.62rem;
}
.imenu li a p {
  font: 0.28rem/0.69rem "微软雅黑";
  color: #6b6b6b;
  line-height: 0.68rem;
}
/* 限时秒杀 */
.times {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 0.3rem;
}
.times .letime {
  width: 3.77rem;
  border-right: 1px solid #f0f0f0;
  margin-top: 0.13rem;
}
.times .letime h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #ef456c;
  padding-left: 0.63rem;
  background: url(../../assets/images/timer.jpg) no-repeat 0.2rem 0.05rem;
  background-size: 0.33rem 0.31rem;
}
.times .letime .god {
  font: 0.22rem/0.3rem "微软雅黑";
  color: #5e5e5e;
  margin-left: 0.17rem;
}
.times .letime .skr {
  width: 2.86rem;
  height: 0.42rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 0.2rem;
  margin-top: 0.05rem;
}
.times .letime .skr span {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 0.06rem;
  background: #23232d;
  font: 0.22rem/0.42rem "微软雅黑";
  color: #feffff;
}
.times .letime .skr em {
  font-size: 0.2rem;
  border-radius: 50%;
  margin-top: 0.1rem;
}
.times .letime .skr div {
  position: relative;
}
.times .letime .skr div .bg {
  width: 0.96rem;
  height: auto;
  margin-left: 0.26rem;
}
.times .letime .skr div .msh {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #000000;
  position: absolute;
  top: 0px;
  left: 0.4rem;
}
.times .letime .yja {
  position: relative;
}
.times .letime .yja .yijia {
  margin-left: 0.59rem;
  width: 2.36rem;
  height: auto;
  margin-top: 0.3rem;
}
.times .letime .yja .ren {
  width: 0.85rem;
  height: 0.85rem;
  background: #ff3179;
  border-radius: 50%;
  text-align: center;
  font: 0.3rem/0.85rem "微软雅黑";
  color: #fff;
  position: absolute;
  right: 0.2rem;
  bottom: 0px;
}
.times .letime .yja .ren em {
  font: 0.2rem "微软雅黑";
  color: #eef8f7;
}
.times .ritime {
  width: 3.73rem;
}
.times .ritime .ritop {
  height: 1.88rem;
  border-bottom: 1px solid #eeeeee;
}
.times .ritime .ritop .letop {
  margin-left: 0.2rem;
}
.times .ritime .ritop .letop h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #ef456c;
  margin-top: 0.13rem;
}
.times .ritime .ritop .letop p {
  font: 0.22rem/0.3rem "微软雅黑";
  color: #5e5e5e;
}
.times .ritime .ritop .letop img {
  margin-top: 0.22rem;
  width: 0.93rem;
  height: auto;
}
.times .ritime .ritop .rito img {
  margin-top: 0.05rem;
  margin-left: 0.25rem;
  width: 1.28rem;
  height: auto;
}
.times .ritime .ribotom {
  display: flex;
  justify-content: space-between;
  width: 3.73rem;
}
.times .ritime .ribotom .lebo {
  width: 1.88rem;
  border-right: 1px solid #f0f0f0;
}
.times .ritime .ribotom .lebo h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #ef456c;
  margin-left: 0.17rem;
}
.times .ritime .ribotom .lebo p {
  font: 0.22rem/0.3rem "微软雅黑";
  color: #5e5e5e;
  margin-left: 0.17rem;
}
.times .ritime .ribotom .lebo img {
  margin-left: 0.59rem;
  margin-top: 0.07rem;
  width: 0.64rem;
  height: auto;
}
.times .ritime .ribotom .ribo {
  width: 1.85rem;
}
.times .ritime .ribotom .ribo h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #ef456c;
  margin-left: 0.17rem;
}
.times .ritime .ribotom .ribo p {
  font: 0.22rem/0.3rem "微软雅黑";
  color: #5e5e5e;
  margin-left: 0.17rem;
}
.times .ritime .ribotom .ribo img {
  margin-left: 0.42rem;
  margin-top: 0.14rem;
  width: 1.04rem;
  height: auto;
}
/* 前景图2 */
.nbv img {
  width: 100%;
  height: auto;
  margin-top: 0.3rem;
}
/* main */
.main {
  background: #ffffff;
  margin-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.main .top {
  width: 7.1rem;
}
.main .top ul {
  display: flex;
  justify-content: space-between;
}
.main .top ul .box {
  width: 1.78rem;
  height: 0.7rem;
  border: 1px solid #d2d2d2;
  text-align: center;
  margin-top: 0.2rem;
}
.main .top ul .box a {
  font: 0.28rem/0.7rem "微软雅黑";
  color: #212121;
}
.main .top ul .box:hover {
  background: #f26b11;
}
.main .top ul .box:hover a {
  color: #f4ffff;
}
.main .top ul .box1 {
  margin-left: 0.2rem;
  background: #f26b11;
  outline: 1px solid #f26b11;
  outline-offset: -1px;
}
.main .top ul .box1 a {
  color: #f4ffff;
}
.main .top ul .box2 {
  border-left: none;
}
.main .bottom .one {
  width: 6.8rem;
  height: 3rem;
  margin-top: 0.32rem;
  box-shadow: 0rem 0rem 0.1rem #eaeaea;
  margin-left: 0.2rem;
}
.main .bottom .one .lebo {
  margin-top: 0.5rem;
  margin-left: 0.38rem;
}
.main .bottom .one .lebo img {
  width: 2.16rem;
  height: auto;
}
.main .bottom .ribo {
  margin-top: 0.3rem;
  margin-left: 0.48rem;
}
.main .bottom .ribo a h3 {
  font: 0.28rem/0.58rem "微软雅黑";
  color: #212121;
}
.main .bottom .ribo a p {
  font: 0.28rem/0.58rem "微软雅黑";
  color: #d53841;
}
.main .bottom .ribo a span {
  font: 0.28rem/0.58rem "微软雅黑";
  color: #959595;
}
.main .bottom .ribo a .ljq {
  width: 1.64rem;
  background: #f26b11;
  border-radius: 0.05rem;
  text-align: center;
  margin-top: 0.12rem;
}
.main .bottom .ribo a .ljq input {
  font: 0.28rem/0.58rem "微软雅黑";
  color: #fff;
}
</style>