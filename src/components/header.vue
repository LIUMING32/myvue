<template>
	<header class="header">	
		<router-link id="logo" to="/home">{{logo}}</router-link>
		<ul class="text-center spacing" style="padding: 0">
	      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
	    </ul>
	    <router-view></router-view>
	</header>
	
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      logo:'LMBL',
      links: [
        {
          text: '首页',
          route: '/page1'
        },
        {
          text: '专栏',
          route: '/page2'
        },
        {
          text: '发现',
          route: '/page3'
        },
        {
          text: '写文章',
          route: '/page4'
        },
        {
          text: '登录/注册',
          route: '/login'
        }
      ]      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
