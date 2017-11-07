import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import Page from '@/components/children/page/shouye'
import Page2 from '@/components/children/page2/xiewz'
import Page3 from '@/components/children/page3/zhuanlan'
import Page4 from '@/components/children/page4/shoucang'
import Page5 from '@/components/children/page5/find'
import Login from '@/components/children/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',     
      component: Home,
      children:[
      	{
      		path:'/',
      		component:Header,
      		children:[
      			{
				      path: '/',
				      component: Page,
				    },
      			{
				      path: '/page',
				      name:'page0',
				      component: Page,
				    },
				    {
				      path: '/page2',
				      name:'page2',
				      component: Page2,
				    },
				    {
				      path: '/page3',
				      name:'page3',
				      component: Page3,
				    },
				    {
				      path: '/page4',
				      name:'page4',
				      component: Page4,
				    },
				    {
				      path: '/page5',
				      name:'page5',
				      component: Page5,
				    },
		      ]
      	}      
      ]
    },
    {
      path: '/home',    
      component: Home,
      children:[
      	{
      		path:'/',
      		component:Header,
      		children:[
      			{
				      path: '/',
				      component: Page,
				    },
      			{
				      path: '/page',
				      name:'page',
				      component: Page,
				    },
				  ]
      	}      
      ]
    },
  ]
})
