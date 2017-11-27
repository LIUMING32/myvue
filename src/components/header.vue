<template>
	<div>
		<header class="header">
			<h1 class="in-block log" ><router-link id="logo" to="/home"><img src="../assets/logoSmall.png"/></router-link></h1>				
			<el-menu :default-active="activeIndex" class="el-menu-demo in-block" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1"><router-link id="page" to="/page">{{pag}}</router-link></el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">写文章</template>
			    <el-menu-item index="2-1">选项1</el-menu-item>
			    <el-menu-item index="2-2">选项2</el-menu-item>
			    <el-menu-item index="2-3">选项3</el-menu-item>
			  </el-submenu>
			  <el-menu-item index="3"><router-link id="page3" to="/page3">{{pag3}}</router-link></el-menu-item>
			  <el-menu-item index="4"><router-link id="page4" to="/page4">{{pag4}}</router-link></el-menu-item>
			  <el-menu-item index="5"><router-link id="page5" to="/page5">{{pag5}}</router-link></el-menu-item>			  
			 <!-- <el-menu-item v-for="item in links"><router-link @click="$goRoute(item.route)">{{item.text}}</router-link></el-menu-item>-->
			</el-menu>
			<div class="in-block">
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" > </el-input>
				<el-button type="text" @click="centerDialogVisible = true">登录/注册</el-button>
			</div>
		    <router-view> </router-view>
		</header>
		<div>
			<el-dialog title="" :visible.sync="centerDialogVisible" width="30%" center>
				<h1>{{ msg }}</h1>
			    <div style="margin-top: 40px;">
			    	<el-input v-model="input" placeholder="请输入验证码" style="margin: 0px;"></el-input>
			    	<el-button type="warning"  style="float: right;width: 40%;">获取验证码</el-button>     	
			    </div>
			    <div style="margin-top: 20px;text-align: center;" >
			    	<a v-for="item in links" @click="$goRoute(item.route)"><el-button type="warning"   style="width:100%;" >登录\注册</el-button></a>
			    </div>
			</el-dialog>
		</div>
	</div>
</template>
<script>
	
	
	
export default {
  name: 'header',
  data () {
    return {
      logo:'LMBL',
      msg:'LMBL',
      activeIndex: '1',
      activeIndex2: '1',
      input21:'',
      centerDialogVisible: false,
      input: '',
      
      links: [
        {          
          route: '/home'
        }        
      ],
      pag:'首页',
      pag3:'专栏',
      pag4:'收藏',
      pag5:'发现',
      pag2:'写文章',
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
	h1{text-align: center;}
	.log{margin:0px 30px 0px 0px;}
	.header{padding: 10px; }	
	.in-block{display: inline-block;vertical-align: middle}
	.el-menu--horizontal {border-bottom:0px;}
	.el-menu--horizontal>.el-menu-item.is-active{color:#409EFF;	}
	a{text-decoration: none;}
	.el-input{width:50%;margin: 15px;}
	.el-dialog__body {text-align: center;}
</style>
