<template>
  <div>
    <div class="page">
      <header class="headcon">
        <div class="arrow">
          <a href="#"
            ><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"
          /></a>
        </div>
        <a href="#" class="logo">登录</a>
        <a href="#" class="login" @click="jumpchange">注册</a>
      </header>
      <div class="con">
        <van-form @submit="loginIn">
          <van-field
            v-model="loginInfo.phone"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
          />
          <van-field
            v-model="loginInfo.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <a href="#" class="pwd">忘记密码</a>
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>
import {getLogin} from '../../axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      loginInfo: {
        phone: "",
        password: "",
      },
    };
  },
  mounted() {
      
  },
  methods: {
      loginIn(){
          getLogin(this.loginInfo)
          .then(res=>{
              if(res.code==200){
                  Toast.success(res.msg)
                  sessionStorage.setItem('userInfo',JSON.stringify(res.list))
                  this.$router.push('/mine')
              }else{
                  Toast.fail(res.msg)
              }
          })
      },

      jumpchange(){
        this.$router.push('/resig')
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
.page .headcon {
  background: #f26b11;
}
.headcon .logo,
.headcon .login {
  font-size: 0.3rem;
  color: #fff;
}
.page .headcon .arrow a img {
  width: 0.17rem;
  height: 0.29rem;
  margin-top: 0.1rem;
}
.page .con {
  margin-top: 1.8rem;
  margin-left: 1rem;
}
.con ul > li {
  width: 5.5rem;
  height: 0.4rem;
  border-bottom: 1px solid black;
  font-size: 0.2rem;
  color: black;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
}

.con .next {
  width: 5.5rem;
  height: 0.8rem;
  display: inline-block;
  border-radius: 0.1rem;
  background: #f26b11;
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.8rem;
  color: #fff;
}
.con .pwd {
  display: block;
  margin-bottom: 0.4rem;
  margin-left: 4rem;
  color: #333333;
}
.van-form {
  margin-right: 35px;
  
}
.van-button{
    background: #f26b11;
}
</style>