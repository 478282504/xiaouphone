<template>
  <div>
    <div class="page" id="app">
      <header class="headcon">
        <div class="arrow">
          <a href="#"
            ><img src="../../assets/images/arrowLeft_2.jpg" alt="arrow"
          /></a>
        </div>
        <a href="#" class="logo">注册</a>
        <a href="#" class="login">登录</a>
      </header>
      <div class="con">
        <ul>
          <van-form @submit="register"> 
            <van-field
              v-model="userInfo.phone"
              name="手机号"
              label="手机号"
              placeholder="请输入手机号"
              :rules="[{ required: true, message: '请输入手机号' }]"
            />
            <van-field
              v-model="userInfo.nickname"
              name="昵称"
              label="昵称"
              placeholder="请输入昵称"
              :rules="[{ required: true, message: '请输入昵称' }]"
            />
            <van-field
              v-model="userInfo.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <li class="yzm">
              <span>验证码 ：</span>
              <input type="text" class="yzmm" />
              <span>等待验证</span>
            </li>
            <a href="#" class="pwd">忘记密码</a>
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit">
                注册
              </van-button>
            </div>
          </van-form>
        </ul>
        <input
          type="checkbox"
          class="fux"
          v-model="agree"
        />我已阅读并同意使用条款和隐私政策
      </div>
    </div>
  </div>
</template>
<script>
import {getRegister} from '../../axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      agree: true,
      userInfo: {
        nickname: "",
        phone: "",
        password: "",
      },
      goodList: [],
    };
  },
  mounted() {
      
  },
  methods: {
      //封装一个注册事件
      register(){
           getRegister(this.userInfo)
           .then(res=>{
               if(res.code==200){
                   Toast.success(res.msg)
                   this.$router.push('/login')
               }else{
                   Toast.fail(res.msg)
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
  margin-top: 1rem;
  margin-left: 1rem;
}
.con ul > li {
  width: 5.5rem;
  height: 0.4rem;
  border-bottom: 1px solid black;
  font-size: 0.2rem;
  color: black;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}
.con .yzmm {
  width: 2.6rem;
}
.con .yzm {
  font-size: 0.25rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  margin-left: 0.2rem;
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
.con .fux {
  margin-top: 0.2rem;
}
.pwd {
  float: right;
  margin-right: 0.6rem;
  margin-bottom: 0.4rem;
}
.van-form {
  margin-right: 35px;
}
.van-button {
  background: #f26b11;
}
</style>