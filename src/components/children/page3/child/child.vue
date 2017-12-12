<template>
  <div >
  	<HeaderDiv></HeaderDiv>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderDiv from '../../../header.vue';

export default {
  name: 'home',
  data () {
    return {
      msg: 'LMML',      
    }
  },  
  components:{
  	HeaderDiv
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,h2{font-size: 40px;color:red;}
	#app{margin:0px;}
</style>
