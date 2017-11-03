import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',     
      component: Home,
      children:[
      	{
      		path:'/',
      		component:Header
      	}      
      ]
    },
    {
      path: '/home',    
      component: Home,
      children:[      	   	
      	{
		    	path: 'header',		     
		      component: Header      
		    }
      ]      
    },
    {
      path: '/home',    
      component: Home,
      children:[      	   	
      	{
		    	path: 'header',		     
		      component: Header      
		    }
      ]      
    }
  ]
})
