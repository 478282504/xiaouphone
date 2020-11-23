<template>
    <div>
         <div class="page">
        <!-- 表头 -->
        <header class="headcon">
            <div class="arrow">
                <a href="#"><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"></a>
            </div>
            <a href="#" class="logo">我的订单</a>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <!-- 内容 -->
        <div class="main">
            <div class="bitop clearfix" v-if="userInfo">
                <div class="bile fl">
                    <a href="#">
                        <img src="../../assets/images/mine.png" alt="mine">
                    </a>
                </div>
                <div class="bice fl">
                    <p>{{userInfo.nickname}}</p>
                    <em>V1</em>
                </div>
                <div class="biri fr">
                    <van-button type="warning" @click="$router.push('/login')">退出登录</van-button>
                </div>
            </div>
            <div class="bitop clearfix" v-else>
                <div class="bile fl">
                    <a href="#">
                        <img src="../../assets/images/mine.png" alt="mine">
                    </a>
                </div>
                <div class="bice fl">
                    <p>悠溯</p>
                    <em>V1</em>
                </div>
                <div class="biri fr">
                    <van-button type="warning" @click="$router.push('/login')">未登录,请登录</van-button>
                </div>
            </div>
            <div class="hez">
                <div class="bibot">
                    <a href="#">
                        <img src="../../assets/images/iconMine_1.jpg" alt="mine1">
                        <p>全部订单</p>
                    </a>
                    <a href="#">
                        <img src="../../assets/images/iconMine_2.jpg" alt="mine2">
                        <p>待付款</p>
                    </a>
                    <a href="#">
                        <img src="../../assets/images/iconMine_3.jpg" alt="mine2">
                        <p>待收货</p>
                    </a>
                </div>
            </div>
            <div class="cen">
                <ul>
                    <li>
                        <p>地址管理</p>
                        <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="right"></a>
                    </li>
                    <li>
                        <p class="box1">我的钱包</p>
                        <a href="#">200元<img src="../../assets/images/arrowRight.jpg" alt="right"></a>
                    </li>
                    <li>
                        <p class="box2">我的优惠券</p>
                        <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="right"></a>
                    </li>
                    <li>
                        <p class="box3">我的二维码</p>
                        <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="right"></a>
                    </li>
                    <li>
                        <p class="box4">我的小伙伴</p>
                        <a href="#"><img src="../../assets/images/arrowRight.jpg" alt="right"></a>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo:''
        }
    },
    mounted() {
      this.userInfo=sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')):''
    },
}
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
  height: .85rem;
  padding: 0 .23rem;
  border-bottom: 1px solid #e4e4e4;
}
.page .headcon .menu {
  display: flex;
  justify-content: space-between;
  width: .59rem;
}
.page .headcon .menu span {
  display: block;
  width: .12rem;
  height: .12rem;
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
  padding: 0 .5rem;
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
  height: .53rem;
}
.page .footbox a p {
  margin-top: .11rem;
  font: 0.2rem "微软雅黑";
  color: #878787;
}
.page .footbox a .shouy {
  color: #ff6d17;
}
.page .headcon {
  background: #f26b11;
  padding-top: .41rem;
  border-bottom: 0;
}
.page .headcon .arrow a img {
  width: .17rem;
  height: .29rem;
  margin-top: .1rem;
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
  background: #f1f1f1;
}
.page .main .bitop {
  width: 100%;
  height: 2.12rem;
  background: #f26b11;
}
.page .main .bitop .bile {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 5px solid #fff;
  margin-left: .31rem;
  background: #822e02;
  overflow: hidden;
}
.page .main .bitop .bile a img {
  width: 1.3rem;
  height: 1.36rem;
  margin-top: .14rem;
  margin-left: .06rem;
}
.page .main .bitop .bice {
  margin-left: .25rem;
  margin-top: .4rem;
}
.page .main .bitop .bice p {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #fff;
}
.page .main .bitop .bice em {
  display: inline-block;
  font: 0.28rem/0.44rem "微软雅黑";
  color: #000;
  font-style: oblique;
}
.page .main .bitop .biri {
  margin-top: .58rem;
  margin-right: .45rem;
}
.page .main .bitop .biri a {
  display: inline-block;
  width: 1.58rem;
  height: .73rem;
  background: #fff;
  font: 0.26rem/0.73rem "微软雅黑";
  color: #f26a12;
  text-align: center;
  border-radius: .03rem;
}
.page .main .hez {
  background: #fff;
}
.page .main .hez .bibot {
  display: flex;
  justify-content: space-between;
  width: 6.3rem;
  height: 1.43rem;
  margin-left: .5rem;
  padding-top: .33rem;
}
.page .main .hez .bibot a {
  text-align: center;
}
.page .main .hez .bibot a img {
  width: .34rem;
  height: .34rem;
}
.page .main .hez .bibot a p {
  font: 0.26rem/0.62rem "微软雅黑";
  color: #676767;
  text-align: center;
}
.page .main .cen {
  width: 100%;
  margin-top: .22rem;
  margin-bottom: 1.36rem;
}
.page .main .cen ul li {
  display: flex;
  justify-content: space-between;
  height: 1.1rem;
  border-bottom: 1px solid #d9d9d9;
  background: #fff;
}
.page .main .cen ul li p {
  font: 0.26rem/1.1rem "微软雅黑";
  color: #696969;
  background: url(../../assets/images/iconMine_4.jpg) no-repeat 0.38rem 0.32rem;
  padding-left: .94rem;
  background-size: .36rem .4rem;
}
.page .main .cen ul li .box1 {
  background: url(../../assets/images/iconMine_5.jpg) no-repeat 0.38rem 0.38rem;
  padding-left: .94rem;
  background-size: .36rem .36rem;
}
.page .main .cen ul li .box2 {
  background: url(../../assets/images/iconMine_6.jpg) no-repeat 0.3rem 0.38rem;
  padding-left: .94rem;
  background-size: .46rem .32rem;
}
.page .main .cen ul li .box3 {
  background: url(../../assets/images/iconMine_7.jpg) no-repeat 0.32rem 0.38rem;
  padding-left: .94rem;
  background-size: .36rem .34rem;
}
.page .main .cen ul li .box4 {
  background: url(../../assets/images/iconMine_8.jpg) no-repeat 0.32rem 0.38rem;
  padding-left: .94rem;
  background-size: .38rem .36rem;
}
.page .main .cen ul li a {
  display: block;
  font: 0.24rem "微软雅黑";
  color: #e97216;
  margin-top: .4rem;
  margin-right: .35rem;
}
.page .main .cen ul li img {
  width: .19rem;
  height: .25rem;
  margin-left: .1rem;
  margin-top: .03rem;
}
</style>