<template>
  <div>
    <div class="page" id="app">
      <!-- 表头 -->
      <header class="headcon">
        <div class="arrow">
          <a href="#" @click="$router.go(-1)"
            ><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"
          /></a>
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
        <div class="van-left">
          <div class="van-leftt">
            <van-checkbox></van-checkbox>
          </div>
          <van-swipe-cell>
            <van-card
              v-for="item in cartList"
              :key="item.uid"
              :num="item.num"
              :price="item.price"
              :title="item.goodsname"
              class="goods-card"
              :thumb="item.img?$imgUrl+item.img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg'"
            >
            <template #footer>
                <div>
                  <van-stepper
                    v-model="value"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
            </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="delet(cartList[0].id)"
              />
            </template>
          </van-swipe-cell>
        </div>
        <div class="jiesuan clearfix">
          <div class="left fl">
            <input type="checkbox" class="fl" />
            <p class="fl">全选</p>
          </div>
          <div class="zhong">
            <p class="p1">总计:30</p>
            <p class="p2">不含运费, 以优惠￥0.00</p>
          </div>
          <div class="you">
            <a href="#">去结算(2件)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartList,getCartDelete } from "../../axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
      cartList: [],
      value: 1,
    };
  },
  mounted() {
    this.getCartListAction();
  },
  methods: {
    getCartListAction() {
      getCartList({
        uid:this.$route.query.id
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.cartList = res.list;
        }
      });
    },
    delet(id){
      getCartDelete({id})
      .then(res=>{
        if(res.code==200){
          Toast.success(res.data)
        }
      })
    }
  },
};
</script>
<style lang="" scoped>
.van-left {
  display: flex;
}
.van-leftt {
  margin-top: 40px;
  margin-left: 10px;
}
.van-swipe-cell {
  flex: 1;
}
.goods-card {
  width: 350px;
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
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
  color: #ff6d17 !important;
}
.page {
  overflow: hidden;
}
.page .headcon {
  background: #f26b11;
  padding-top: 0.41rem;
  border-bottom: 0;
}
.page .headcon .arrow a img {
  width: 0.17rem;
  height: 0.29rem;
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
.page .main ul {
  margin-bottom: 3.67rem;
}
.page .main ul li {
  display: flex;
  justify-content: space-between;
  width: 8.48rem;
  margin-top: 0.36rem;
  box-shadow: 0 0 0.1rem #e9e9e9;
}
.page .main ul li .left {
  width: 7.5rem;
  height: 1.75rem;
}
.page .main ul li .left .qian .danx {
  /* display: inline-block; */
  width: 0.3rem;
  height: 0.3rem;
  /* border-radius: 50%; */
  margin-left: 0.25rem;
  /* border: 1px solid #b83a2e; */
  margin-top: 0.69rem;
  /* background: url(../images/selectCart.jpg) no-repeat 0.06rem 0.08rem; */
  /* background-size: .17rem .13rem; */
}
.page .main ul li .left .qian img {
  width: 1rem;
  height: 0.82rem;
  margin-top: 0.38rem;
  margin-left: 0.4rem;
}
.page .main ul li .left .wen {
  margin-left: 0.36rem;
}
.page .main ul li .left .wen h3 {
  font: 0.26rem/0.68rem "微软雅黑";
  color: #333333;
}
.page .main ul li .left .wen .gug {
  font: 0.23rem/0.37rem "微软雅黑";
  color: #8f8f8f;
}
.page .main ul li .left .wen .many {
  font: 0.32rem/0.67rem "Arial";
  color: #e3393c;
}
.page .main ul li .left .daj {
  width: 2.12rem;
  height: 0.59rem;
  margin-top: 0.89rem;
  margin-right: 0.45rem;
  border: 1px solid #454545;
}
.page .main ul li .left .daj button {
  width: 0.63rem;
  height: 0.57rem;
  background: #ffffff;
  border: 0;
  font: 0.3rem "微软雅黑";
}
.page .main ul li .left .daj .nume {
  width: 0.81rem;
  height: 0.59rem;
  text-align: center;
  font: 0.28rem/0.59rem "微软雅黑";
  border-left: 1px solid #454545;
  border-right: 1px solid #454545;
}
.page .main ul li .right {
  width: 0.98rem;
  background: #e43a3d;
}
.page .main ul li .right .del {
  font: 0.24rem/1.75rem "微软雅黑";
  color: #fff;
  margin-left: 0.25rem;
}
.page .main ul .righto {
  transform: translate(-1.2rem);
}
.page .main .jiesuan {
  width: 100%;
  position: fixed;
  left: 0rem;
  bottom: 1.16rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.3rem;
  padding-left: 0rem;
  padding-right: 0rem;
  height: 1.15rem;
}
.page .main .jiesuan .left {
  margin-top: 0.46rem;
}
.page .main .jiesuan .left input {
  width: 0.34rem;
  height: 0.34rem;
}
.page .main .jiesuan .left p {
  margin-top: 0.03rem;
  margin-left: 0.15rem;
  font: 0.24rem "微软雅黑";
  color: #656565;
}
.page .main .jiesuan .zhong {
  width: 3.4rem;
  text-align: right;
}
.page .main .jiesuan .zhong .p1 {
  font: 0.3rem/0.46rem "微软雅黑";
  margin-top: 0.15rem;
  margin-right: 0.22rem;
}
.page .main .jiesuan .zhong .p2 {
  font: 0.2rem/0.36rem "微软雅黑";
  color: #bcbcbc;
  margin-right: 0.22rem;
}
.page .main .jiesuan .you a {
  display: block;
  width: 2.45rem;
  font: 0.3rem/1.15rem "微软雅黑";
  background: #f26b11;
  text-align: center;
  color: #fff;
}
.page .footbox a .shouy {
  color: #8c8c8c;
}
.page .footbox a .shoui {
  color: #fa6900 !important;
}
</style>