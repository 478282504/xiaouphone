import Vue from 'vue'
import Router from 'vue-router'


//引入一级路由
import vIndex from '../components/one/index'
import vSort from '../components/one/sort'
import shopDeta from '../components/one/shopDeta'
import vResig from '../components/one/resig'
import vLogin from '../components/one/login'

//引入二级路由
import vCart from '../components/two/cart'
import vCarton from '../components/two/carton'
import vHome from '../components/two/home'
import vMine from '../components/two/mine'
import sortDeta from '../components/two/sortDeta'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:vIndex,
      children:[
        {
          path:'/home',
          component:vHome
        },
        {
          path:'/cart',
          component:vCart
        },
        {
          path:'/carton',
          component:vCarton
        },
        {
          path:'/mine',
          component:vMine
        },
        {
          path:'/sortDeta',
          component:sortDeta
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/sort',
      component:vSort
    },
    {
      path:'/shopDeta',
      component:shopDeta
    },
    {
      path:'/resig',
      component:vResig
    },
    {
      path:'/login',
      component:vLogin
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
