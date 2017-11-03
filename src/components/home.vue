<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,h2{font-size: 40px;color:red;}
</style>
