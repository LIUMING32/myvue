<template>
  <div class="apps">
    <hr>
    <todoInput />
    <todoList />
    <p>todoList 数量：{{todoCount}}</p>
    <pre>{{$store.state}}</pre>
<!--    <router-view/>-->
  </div>
</template>

<script>
	import todoInput from './input.vue';
	import todoList from './list.vue';
	import {mapGetters} from "vuex";
	export default {
	  computed:{
	    ...mapGetters({
	      todoCount:"nCounts"
	    })
	  },
	  components:{
	    todoInput,
	    todoList
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
