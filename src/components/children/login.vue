<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <div style="margin-top: 40px;">
    	<el-input v-model="input" placeholder="请输入验证码"></el-input>
    	<el-button type="warning"  >获取验证码</el-button>     	
    </div>
    <div style="margin-top: 20px;">
    	<a href="https://www.baidu.com"><el-button type="warning"   style="padding:10px 127px;" >登录\注册</el-button></a>    	 
    </div>  
   
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'LMBL',
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

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
.el-input{padding: 0px;margin: 0px;width: 200px;}
</style>
