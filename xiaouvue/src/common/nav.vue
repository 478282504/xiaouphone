<template>
    <div>
        <footer class="footbox">
            <router-link active-class="shouy" to="/home">
                <span class="iconfont icon-biaoqiankuozhan_shouye-116"></span>
                <p>首页</p>
            </router-link>
            <router-link active-class="shouy" to="/cart">
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>
            </router-link>
            <router-link active-class="shouy" to="/mine">
                <span class="iconfont icon-me"></span>
                <p>我的</p>
            </router-link>
        </footer>
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
<style lang="">
.footbox {
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
.footbox a {
  display: block;
  text-align: center;
}
.footbox a span {
  width: auto;
  height: .53rem;
  font-size: .6rem;
}
.footbox  p {
  margin-top: .11rem;
  font: 0.2rem "微软雅黑";
  color: #878787;
}
.footbox .shouy p ,
.footbox .shouy span{
  color: #ff6d17 !important;
}

</style>