import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstComponent from '@/components/FirstComponent'
import AboutComponent from '@/components/about/AboutComponent'
import NewsComponent from '@/components/about/NewsComponent'
import MessageComponent from '@/components/about/MessageComponent'
import ToDoComponent from '@/components/ToDoComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDoComponent
    },
    {
      path: '/first',
      name: 'FirstComponent',
      component: FirstComponent
    },
    {
      path: '/about',
      name: 'AboutComponent',
      component: AboutComponent,
      children: [
        {
          path: 'news',
          name: 'newsComponent',
          component: NewsComponent
        },
        {
          path: 'message',
          name: 'messageComponent',
          component: MessageComponent
        }
      ]
    }
  ]
})
