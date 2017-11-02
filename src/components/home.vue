<template>
  <div id="app">
  	 <h1>回家</h1>
    <headerdiv logo="Wise"></headerdiv>
    <router-view></router-view>
    <footerdiv></footerdiv>   
  </div>
</template>

<script>
export default {
  name: 'home',
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

</style>
