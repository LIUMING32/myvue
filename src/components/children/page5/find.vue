<template>
	<div id="imgWrap">
		<!--<photo></photo>-->
		<flex></flex>
	</div>
</template>

<script>
import photo from './photo.vue';
import flex from './flex.vue';

export default {
  	name: 'headerDiv',
  	data () {
	    return {
	    }
  	},
  	components:{
	    photo,
	    flex	    
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#imgWrap{width: 960px;margin: 0 auto;}
</style>
