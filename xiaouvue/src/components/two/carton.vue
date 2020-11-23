<template>
    <div>
        <div class="page">
        <!-- 表头 -->
        <header class="headcon">
            <div class="arrow">
                <a href="#"><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"></a>
            </div>
            <a href="#" class="logo">购物车</a>
            <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p>
        </header>
        <!-- 内容 -->
        <div class="main">
            <div class="topc clearfix">
                <div class="topa">
                    <p>收货人：YouSu</p>
                    <p>10000000000</p>
                </div>
                <div class="topx">
                    <p>收货地址：北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
                </div>
                <div class="topr fr">
                    <img src="../../assets/images/arrowRight.jpg" alt="arrow">
                </div>
            </div>
            <div class="cen">
                <div class="cent">
                    <div class="lece clearfix">
                        <img class="fl" src="../../assets/images/shop_4.jpg" alt="shop4">
                        <div class="box1 fl">
                            <p>雅诗兰黛护肤霜</p>
                            <span>规格：50g</span>
                        </div>
                    </div>
                    <div class="rice">
                        <p><i>&yen;</i>123.00</p>
                    </div>
                </div>
                <div class="numb">
                    <div class="nubb">
                        <p>购买数量：</p>
                    </div>
                    <div class="nuba">
                        <button>-</button>
                        <input type="text" value="1">
                        <button>+</button>
                    </div>
                </div>
                <div class="boe">
                    <div class="boxo">
                        <p>配送方式</p>
                    </div>
                    <div class="boxt">
                        <p>XX快递</p>
                    </div>
                </div>
            </div>
            <div class="bott">
                <div class="boee">
                    <div class="boxo">
                        <p>优惠券</p>
                    </div>
                    <div class="boxt">
                        <p>无可用</p>
                    </div>
                </div>
                <div class="boew">
                    <div class="boxo">
                        <p>使用积分</p>
                    </div>
                    <div class="boxt clearfix">
                        <input type="text" placeholder="输入积分" class="fl">
                        <input type="submit" value="使用"  class="fl">
                        <p class="fl">可用<span>50</span>积分</p>
                    </div>
                </div>
            </div>
            <div class="sheo">
                <ul>
                    <li>
                        <p>商品详情</p>
                        <p class="red">&yen;123.00</p>
                    </li>
                    <li>
                        <p>运费</p>
                        <p class="red">+&yen;0.00</p>
                    </li>
                    <li>
                        <p>优惠券</p>
                        <p class="red">-&yen;0.00</p>
                    </li>
                    <li>
                        <p>会员优惠</p>
                        <p class="red">-&yen;0.00</p>
                    </li>
                    <li>
                        <p>积分抵扣</p>
                        <p class="red">-&yen;0.00</p>
                    </li>
                </ul>
                <div class="shebo clearfix">
                    <div class="sheto fr">
                        <p>实付金额：<span>&yen;123.00</span></p>
                    </div>
                    <div class="botb">
                        <input type="submit" value="提交按钮">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
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
.page .main .topc {
  height: 1.52rem;
  background: #fff;
}
.page .main .topc .topa {
  display: flex;
  justify-content: space-between;
  width: 6.1rem;
  height: .3rem;
  margin-top: .25rem;
  padding-left: .3rem;
}
.page .main .topc .topa p {
  font: 0.24rem "微软雅黑";
  color: #646464;
}
.page .main .topc .topx {
  width: 6.1rem;
  height: .3rem;
  margin-top: .25rem;
  padding-left: .3rem;
}
.page .main .topc .topx p {
  font: 0.24rem "微软雅黑";
  color: #646464;
}
.page .main .topc .topr img {
  width: .19rem;
  height: .26rem;
  margin-right: .3rem;
  margin-top: -0.4rem;
}
.page .main .cen {
  background: #fff;
  margin-top: .1rem;
}
.page .main .cen .cent {
  display: flex;
  justify-content: space-between;
}
.page .main .cen .cent .lece img {
  width: 1rem;
  height: .81rem;
  margin-left: .35rem;
  margin-top: .22rem;
}
.page .main .cen .cent .lece .box1 {
  margin-left: .28rem;
  margin-top: .3rem;
}
.page .main .cen .cent .lece .box1 p {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #646464;
}
.page .main .cen .cent .lece .box1 span {
  font: 0.22rem/0.4rem "微软雅黑";
  color: #b4b4b4;
}
.page .main .cen .cent .rice p {
  font: 0.36rem/1.15rem "微软雅黑";
  color: #df3b32;
  margin-right: .37rem;
}
.page .main .cen .cent .rice p i {
  font-size: .22rem;
}
.page .main .cen .numb {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 1.13rem;
  border-bottom: 1px solid #f0f0f0;
  margin-top: .38rem;
  margin-left: .28rem;
}
.page .main .cen .numb .nubb p {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #646464;
}
.page .main .cen .numb .nuba button {
  width: .75rem;
  height: .63rem;
  border: 1px solid #515151;
  border-radius: .05rem;
  background: #ffffff;
  font-size: .22rem;
}
.page .main .cen .numb .nuba input {
  width: 1.18rem;
  height: .6rem;
  border: 1px solid #515151;
  border-radius: .05rem;
  text-align: center;
  font-size: .22rem;
}
.page .main .cen .boe {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 1.13rem;
  margin-left: .28rem;
}
.page .main .cen .boe p {
  font: 0.24rem/0.97rem "微软雅黑";
  color: #646464;
}
.page .main .bott {
  background: #fff;
  margin-top: .1rem;
}
.page .main .bott .boee {
  display: flex;
  justify-content: space-between;
  width: 6.8rem;
  height: 1.13rem;
  margin-left: .28rem;
  border-bottom: 1px solid #f0f0f0;
}
.page .main .bott .boee p {
  font: 0.24rem/0.97rem "微软雅黑";
  color: #646464;
}
.page .main .bott .boew {
  display: flex;
  justify-content: space-between;
  margin-left: .28rem;
  margin-right: .2rem;
}
.page .main .bott .boew .boxo {
  width: 1.25rem;
  height: 1rem;
}
.page .main .bott .boew .boxo p {
  font: 0.24rem/1rem "微软雅黑";
  color: #646464;
}
.page .main .bott .boew .boxt {
  width: 3.9rem;
  height: .84rem;
  margin-top: .17rem;
}
.page .main .bott .boew .boxt input[type=text] {
  width: 1.5rem;
  height: .7rem;
  border: 1px solid #d7d7d7;
  text-align: center;
}
.page .main .bott .boew .boxt input[type=submit] {
  width: .72rem;
  height: .72rem;
  background: #f26b11;
  color: #faf0fb;
  margin-left: .09rem;
}
.page .main .bott .boew .boxt p {
  font: 0.24rem/0.84rem "微软雅黑";
  color: #646464;
  margin-left: .1rem;
}
.page .main .bott .boew .boxt p span {
  color: #d3323a;
}
.page .main .sheo {
  background: #fff;
  margin-top: .1rem;
  height: 5.2rem;
  margin-bottom: 1.5rem;
}
.page .main .sheo ul {
  width: 6.8rem;
  height: 2.31rem;
  border-bottom: 1px solid #f0f0f0;
  margin-left: .28rem;
  padding-top: .26rem;
}
.page .main .sheo ul li {
  display: flex;
  justify-content: space-between;
}
.page .main .sheo ul li p {
  font: 0.24rem/0.45rem "微软雅黑";
  color: #646464;
}
.page .main .sheo ul li .red {
  color: #d3323a;
}
.page .main .sheo .shebo {
  width: 6.8rem;
  height: 2.6rem;
  background: #fff;
}
.page .main .sheo .shebo .sheto p {
  font: 0.24rem/1.34rem "微软雅黑";
  color: #535353;
}
.page .main .sheo .shebo .sheto p span {
  color: #d3323a;
}
.page .main .sheo .shebo .botb {
  height: 1.13rem;
}
.page .main .sheo .shebo .botb input {
  width: 3.56rem;
  height: 1.12rem;
  background: #f26b11;
  border-radius: .05rem;
  margin-left: 2rem;
  margin-top: -0.2rem;
  font: 0.35rem/1.12rem "微软雅黑";
  color: #fbfffa;
}
.page .footbox a .shouy {
  color: #8c8c8c;
}
.page .footbox a .shoui {
  color: #fa6900;
}

</style>