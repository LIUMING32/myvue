<template>
	<div id="flex-Wrap">
	  	<header>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</header>
	    <main class="Site-content">
	    	<div class="parent" >
	    		<div class="child" v-for="o in 8">
	    			{{o}}
	    		</div>
	    	</div>
	    </main>
	    <footer>
	    	<div >属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</div>
	    </footer>
	</div>
</template>

<script>
import photo from '../../../assets/photo.png';
import Logo from '../../../assets/logo.png';

export default {
  name: 'headerDiv',
  data () {
    return {
    	photos:photo,
    	logo:Logo,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#flex-Wrap{
		width: 960px;
		margin:20px auto;
	}
	.Site {
	  display: flex;
	  min-height: 100vh;
	  flex-direction: column;
	}
	.Site-content {
	  flex: 1;
	}
	.parent {
	  width: 960px;
	  height: 150px;
	  background-color: paleturquoise;
	  display: flex;
	  flex-flow: row wrap;
	  align-content: flex-start;
	}
	.child {
	  box-sizing: border-box;
	  background-color: white;
	  flex: 0 0 25%;
	  height: 50px;
	  border: 1px solid grey;
	}
</style>
