<template>
	<div>
		<header class="header">
			<h1 class="in-block" ><router-link id="logo" to="/home"><img src="../assets/logoSmall.png"/></router-link></h1>				
			<el-menu :default-active="activeIndex" class="el-menu-demo in-block" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1"><router-link id="page" to="/page">{{page}}</router-link></el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">写文章</template>
			    <el-menu-item index="2-1">选项1</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="3"><router-link id="page3" to="/page3">{{page3}}</router-link></el-menu-item>
			  <el-menu-item index="4"><router-link id="page4" to="/page4">{{page4}}</router-link></el-menu-item>
			  <el-menu-item index="5"><router-link id="page5" to="/page5">{{page5}}</router-link></el-menu-item>			  
			 <!-- <el-menu-item v-for="item in links"><router-link @click="$goRoute(item.route)">{{item.text}}</router-link></el-menu-item>-->
			</el-menu>
			<div class="in-block">
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" > </el-input>
				<el-button type="text">登录/注册</el-button>
			</div>
		    <router-view> </router-view>
		</header>
	</div>
</template>
<script>
	
	
	
export default {
  name: 'header',
  data () {
    return {
      logo:'LMBL',
      activeIndex: '1',
      activeIndex2: '1',
      input21:'',
      page:'首页',
      page3:'专栏',
      page4:'收藏',
      page5:'发现',
      page2:'写文章',
//    links:[
//    	{text:'首页',route:'/page1',},
//    	{text:'写文章',route:'/page2',},
//    	{text:'专栏',route:'/page3',},
//    	{text:'收藏',route:'/page4',},
//    	{text:'发现',route:'/page5',}
//    ],
    }
  },
  methods: {
      handleSelect(key, keyPath) {
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1{margin:0px 30px 0px 0px}
	.header{padding: 10px; }	
	.in-block{display: inline-block;vertical-align: middle}
	.el-menu--horizontal {border-bottom:0px;}
	.el-menu--horizontal>.el-menu-item.is-active{color:#409EFF;	}
	a{text-decoration: none;}
	.el-input{width:50%;margin: 15px;}
</style>
