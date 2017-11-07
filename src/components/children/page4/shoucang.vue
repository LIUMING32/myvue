<template>
	<header class="header">		
		{{navs}}		
	</header>

</template>

<script>
export default {
  name: 'headerDiv',
  inpuTxt:'',
  data () {
    return {
      navs: '这里是page2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
