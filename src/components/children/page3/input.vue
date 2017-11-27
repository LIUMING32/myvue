<template>
	<div class="form-group ">
      <input type="text" class="form-control"  placeholder="" v-model="value"  />
      <button type="buttom" class="btn btn-default" @click="addItem">Add Item</button>
    </div>
</template>

<script>

export default {
  data () {
    return {
      value:'',
      id:'0',
    }
  },
  methods:{
  	addItem(){
  		let item = {value:this.value,id:++this.id};
  		this.value="";
  		console.log(item);
  		this.$store.dispatch("onAddTodo",item);
  	}
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
	
</style>
