<template>
	<div>
		<div class="todolist">
	      <ul class="list-group">
	        <li class="list-group-item" v-for="(item,index) in aTodos" >
	            <span >{{item.value}}</span>
	            <button class="btn btn-default"  @click="delItem(index)" >删除</button>
	        </li>
	       </ul>
	    </div>
	    <div>
	    	
	    </div>
		
	</div>
	
</template>

<script>
import {mapState} from "vuex"
export default {
  name: '',
  data () {
    return {     
    }
  },
  computed:{
  	...mapState([
  		'aTodos',
  	])
  },  	
  methods:{
  	delItem(index){
  		console.log(this.store);
  		this.$store.dispatch('onDelTodo',index);  
  	}
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  /*%box{display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;}
    .list-group-item{
    	display: -webkit-box;-webkit-box-align:center;
        span{
            display: block;
            -webkit-box-flex:1;
        }
    }*/
</style>
<!--<style></style>-->
