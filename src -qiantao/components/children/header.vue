<template>
	<header class="header">		
		<ul class="nav">
			<li v-for="nav in navs">{{nav.li}}</li>
		</ul>
	</header>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      navs: [
      	{li:'首页'},
      	{li:'最新活动'},
      	{li:'产品'},
      	{li:'解决方案'},
      	{li:'数据-智能'},
      	{li:'安全'},
      	{li:'云市场'},
      	{li:'支持'},
      	{li:'合作伙伴'},
      	{li:'登录'},
      	{li:'退出'}
      ]
    }
  },
  props:['logo']
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
