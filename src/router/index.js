import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '../components/findHouse.vue/layout.vue'
import home from '../components/findHouse.vue/home.vue';
import followUp from '../components/findHouse.vue/followUp.vue';
import appointment from '../components/findHouse.vue/appointment.vue';
import resolved from '../components/findHouse.vue/resolved.vue';
import createWork from '../components/findHouse.vue/createWork.vue';
import index from '../components/findHouse.vue/index.vue';
import Users from '../components/findHouse.vue/Users.vue';
import indexVue from '../components/zufang/index.vue'
Vue.use(Router)
export default new Router({
  routes: [
        {
          path: '/',//地址栏显示的路径
          name: 'layout',
          component: layout , // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
        },
        {
          path: '/home',//地址栏显示的路径
          name: 'home',
          component:home ,
          children:[
            {
              path: 'followUp',//地址栏显示的路径
              name: 'followUp',
              component:followUp ,
            },
            {
              path: 'appointment',//地址栏显示的路径
              name: 'appointment',
              component:appointment ,
            },
            {
              path: 'resolved',//地址栏显示的路径
              name: 'resolved',
              component:resolved ,
            },        
          ]
        },
        {
          path: '/createWork',//地址栏显示的路径
          name: 'createWork',
          component: createWork , // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”. 
        },
        {
          path: '/index',//地址栏显示的路径
          name: 'index',
          component: index ,// layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”. 
           children:[
             {
              path: '/Users',//地址栏显示的路径
              name: 'Users',
              component: Users ,// layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”. 
             }
           ]
        },
        {
          path: '/indexVue',//地址栏显示的路径
          name: 'indexVue',
          component: indexVue , // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”. 
        },
  ]
})

// export default new Router({
//   routes:[
//     {
//       path: '/',//地址栏显示的路径
//       name: 'home',
//       component: home , // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
//     },
//     {
//       path: '/layout',//地址栏显示的路径
//       name: 'layout',
//       component: layout , // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
//     }
//   ]
// })