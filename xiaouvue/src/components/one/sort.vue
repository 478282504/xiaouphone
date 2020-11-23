<template>
  <div>
    <div class="page">
      <!-- 表头 -->
      <header class="headcon">
        <div class="arrow">
          <a href="javascript:;" @click="$router.go(-1)"><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"
          /></a>
        </div>
        <a href="#" class="logo">商品分类</a>
        <p class="menu">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>
      <!-- 内容 -->
      <div class="mainw clearfix">
        <div class="maile fl">
          <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item
              v-for="item in firstList"
              :key="item.id"
              :title="item.catename"
            />
          </van-sidebar>
        </div>
        <div class="mairi fl">
          <div class="topm">
            <van-grid :border="false" :column-num="3" gutter="5">
              <van-grid-item :to="'/sortDeta?id='+item.id" v-for="item in secondList" :key="item.id">
                <van-image
                  :src="
                    item.img
                      ? $imgUrl + item.img
                      : 'https://img.yzcdn.cn/vant/apple-1.jpg'
                  "
                />
                <p>{{item.catename}}</p>
              </van-grid-item>
            </van-grid>
          </div>
          <!-- <div class="botm">
            <div class="topw">
              <h3>染发类</h3>
              <p><a href="#">更多></a></p>
            </div>
            <div class="botw">
              <ul class="clearfix">
                <li class="fl">
                  <a href="#">
                    <img
                      src="../../assets/images/shopClassify_1.jpg"
                      alt="shop"
                    />
                    <p>施华蔻染色</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="#">
                    <img
                      src="../../assets/images/shopClassify_1.jpg"
                      alt="shop"
                    />
                    <p>施华蔻双氧乳</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="#">
                    <img
                      src="../../assets/images/shopClassify_1.jpg"
                      alt="shop"
                    />
                    <p>施华蔻染发膏</p>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCateTree } from "../../axios";
export default {
  data() {
    return {
      activeKey: 0,//相当于id
      firstList: [],
      secondList: [],
    };
  },
  mounted() {
    this.getCateTreeAction();
  },
  methods: {
    //二级拿一级的数据源
    onChange(e) {
      this.secondList = this.firstList[e].children
    },

    getCateTreeAction() {
      getCateTree().then((res) => {
        if (res.code == 200) {
          console.log(res);
          this.firstList = res.list;
          this.secondList = res.list[this.activeKey].children;
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
.page {
  /* main */
}
.page .headcon {
  background: #f26b11;
  padding-top: 0.41rem;
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
.page .mainw {
  background: #ffffff;
}
.page .mainw .maile {
  width: 1.62rem;
  height: 10.46rem;
  border-right: 1px solid #d9d9d9;
}
.page .mainw .maile ul {
  padding-top: 0.4rem;
}
.page .mainw .maile ul li {
  width: 100%;
  height: 0.52rem;
  border-left: 0.08rem solid transparent;
  margin-bottom: 0.4rem;
}
.page .mainw .maile ul li a {
  display: block;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #676767;
  padding-left: 0.38rem;
}
.page .mainw .maile ul li:hover {
  border-color: #f26b11;
}
.page .mainw .maile ul li:hover a {
  color: #f26b11;
}
.page .mainw .maile ul .ts {
  border-color: #f26b11;
}
.page .mainw .maile ul .ts a {
  color: #f26b11;
}
.page .mainw .mairi {
  width: 5.5rem;
}
.page .mainw .mairi .topm {
  height: 5.2rem;
}
.page .mainw .mairi .topm .topw {
  display: flex;
  justify-content: space-between;
  width: 4.89rem;
  height: 0.3rem;
  margin-left: 0.5rem;
  margin-top: 0.55rem;
}
.page .mainw .mairi .topm .topw h3 {
  font: 0.26rem "微软雅黑";
  color: #454545;
}
.page .mainw .mairi .topm .topw p a {
  font: 0.24rem "微软雅黑";
  color: #676767;
}
.page .mainw .mairi .topm .botw ul li {
  margin-left: 0.26rem;
  margin-top: 0.46rem;
}
.page .mainw .mairi .topm .botw ul li a {
  display: block;
  text-align: center;
}
.page .mainw .mairi .topm .botw ul li a img {
  width: 1.54rem;
  height: 1.52rem;
}
.page .mainw .mairi .topm .botw ul li a p {
  font: 0.24rem "微软雅黑";
  color: #878787;
  margin-top: 0.23rem;
}
.page .mainw .mairi .botm .topw {
  display: flex;
  justify-content: space-between;
  width: 4.89rem;
  height: 0.3rem;
  margin-left: 0.5rem;
  margin-top: 1.13rem;
}
.page .mainw .mairi .botm .topw h3 {
  font: 0.26rem "微软雅黑";
  color: #454545;
}
.page .mainw .mairi .botm .topw p a {
  font: 0.24rem "微软雅黑";
  color: #676767;
}
.page .mainw .mairi .botm .botw ul li {
  margin-left: 0.27rem;
  margin-top: 0.46rem;
}
.page .mainw .mairi .botm .botw ul li a {
  display: block;
  text-align: center;
}
.page .mainw .mairi .botm .botw ul li a img {
  width: 0.82rem;
  height: 1.33rem;
}
.page .mainw .mairi .botm .botw ul li a p {
  font: 0.24rem "微软雅黑";
  color: #878787;
  margin-top: 0.23rem;
}
</style>