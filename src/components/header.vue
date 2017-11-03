<template>
	<header class="header">	
		<router-link id="logo" to="/home">{{logo}}</router-link>
		<ul class="text-center spacing" style="padding: 0">
	      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
	    </ul>
	</header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      logo:'LMBL',
//    links: [
//      {
//        text: '圆白菜',
//        route: '/page01/page01-a'
//      },
//      {
//        text: '长白菜',
//        route: '/page01/page01-b'
//      },
//      {
//        text: '长白菜',
//        route: '/page01/page01-b'
//      },
//      {
//        text: '长白菜',
//        route: '/page01/page01-b'
//      },
//      {
//        text: '长白菜',
//        route: '/page01/page01-b'
//      }
//    ]      
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
