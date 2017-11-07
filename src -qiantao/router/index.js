import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import Login from '@/components/children/login'
import First from '@/components/children/login/first'
import Page1 from '@/components/children/page1'
import Page2 from '@/components/children/page2'
import Page1a from '@/components/children/page1-a'
import Page2a from '@/components/children/page2-a'

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
		      		path:'/page1',
		      		component:Page1,
		      	},
		      	{
		      		path:'/page2',
		      		component:Page2,
		      	},
		      	{
		      		path:'/page3',
		      		component:Page1,
		      	},
		      	{
		      		path:'/page4',
		      		component:Page2,
		      	},
		      	{
		      		path:'/login',
		      		component:Login,
		      		children:[
				      	{
				      		path:'first',
				      		component:First
				      	}
				      ]
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
		    	path: 'header',		     
		      component: Header,
		      children:[
		      	{
		      		path:'/page1',
		      		component:Page1,
		      	},
		      	{
		      		path:'/page2',
		      		component:Page2,
		      	},
		      	{
		      		path:'/page3',
		      		component:Page1,
		      	},
		      	{
		      		path:'/page4',
		      		component:Page2,
		      	},
		      	{
		      		path:'/login',
		      		component:Login,
		      		children:[
				      	{
				      		path:'first',
				      		component:First
				      	}
				      ]
		      	},
		      ]
		    }
      ]      
    }
  ]
})
