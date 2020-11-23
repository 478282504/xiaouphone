<template>
  <div>
    <div class="page">
      <!-- 表头 -->
      <header class="headcon">
        <div class="arrow">
          <a href="javascript:;" @click="$router.go(-1)"
            ><img src="../../assets/images/arrowLeft.jpg" alt="arrow"
          /></a>
        </div>
        <a href="#" class="logo"
          ><img src="../../assets/images/logo.jpg" alt="logo"
        /></a>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- 搜索 -->
      <div class="inpu">
        <a href="#"
          ><img src="../../assets/images/search.jpg" alt="search" />搜索商品</a
        >
      </div>
      <!-- maine -->
      <div class="maine">
        <div class="fen clearfix">
          <van-card
          @click="jumpList(item.id)"
            v-for="item in firstList"
            :key="item.id"
            num="1"
            :price="item.price.toFixed(2)"
            :title="item.goodsname"
            :thumb="item.img?$imgUrl+item.img :'https://img.yzcdn.cn/vant/ipad.jpeg'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../../axios";
export default {
  data() {
    return {
      firstList: [],
    };
  },
  mounted() {
    this.getGoodsAction();
  },
  methods: {
    //封装获取商品列表事件
    getGoodsAction() {
      getGoods().then((res) => {
        console.log(res);
        this.firstList = res.list;
      });
    },
    //点击跳转到商品详情页
    jumpList(id){
      this.$router.push({
        path:'/shopDeta',
        query:{
          id
        }
      })
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
.page {
  /* maine */
}
.page .headcon {
  border-bottom: none;
}
.page .headcon .arrow img {
  width: 0.15rem;
  height: 0.32rem;
}
.page .headcon .logo img {
  width: 1.5rem;
  height: 0.29rem;
}
.page .inpu {
  background: #fff;
  padding-top: 0.5rem;
}
.page .inpu a {
  width: 6.24rem;
  height: 0.78rem;
  background: #f26b11;
  border-radius: 0.4rem;
  display: block;
  margin-left: 0.62rem;
  text-align: center;
  font: 0.26rem/0.78rem "微软雅黑";
  color: #fff;
}
.page .inpu a img {
  width: 0.26rem;
  height: 0.27rem;
  margin-top: 0.26rem;
  margin-right: 0.23rem;
}
.page .maine {
  width: 100%;
  background: #fff;
  padding-bottom: 1.35rem;
}
.page .maine .fen {
  width: 6.8rem;
  height: 1.83rem;
  margin-left: 0.23rem;
  padding-top: 0.52rem;
  border-bottom: 1px solid #d1d1d1;
}
.page .maine .fen .pic img {
  width: 1.47rem;
  height: 1.6rem;
  margin-left: 0.2rem;
}
.page .maine .fen .wen {
  width: 4.8rem;
  margin-left: 0.3rem;
}
.page .maine .fen .wen a p {
  font: 0.26rem/0.37rem "微软雅黑";
  color: #323232;
}
.page .maine .fen .wen a .many {
  font: 0.26rem/0.53rem "微软雅黑";
  color: #e53a3c;
}
.page .maine .fen .wen a span {
  font: 0.26rem/0.41rem "Arial";
  color: #999999;
}
</style>