<template>
  <div style="max-width: 960px;margin: 0 auto;">
	    <!--<todoInput />
	    <todoList />-->
    	<!--<p>todoList 数量：{{todoCount}}</p>-->
			<!--    <pre>{{$store.state}}</pre>-->
			<!--    <router-view/>-->
		 <div class="clearfix"></div>
			<div style="max-width: 960px;margin: 0 auto;">
				<tree :model="root" :length="length"></tree>
				<Tables></Tables>
			</div>
  	</div>
  </div>
</template>

<script>
	import todoInput from './input.vue';
	import todoList from './list.vue';
	import tree from './tree.vue';
	import Tables from './table.vue';
	import {mapGetters} from "vuex";
	import edit from '../../../assets/edit.png'
	
	export default {
		data() {
      return {
      	edits:edit,
        root:{
          name:"海大星艺",
          level:0,
          isOpen:true,
          children:[
            {
              name:"产品部",
              level:1,
              url:"/child",
              isOpen:false,
              children:[
                {
                  name:"小明",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"小红",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
            },
            {
              name:"市场部",
              level:1,
              url:"/child",
              isOpen:false,
              children:[
                {
                  name:"小青",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"小白",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
            },
            {
              name:"技术部",
              level:1,
              url:"/child",
              isOpen:false,
              children:[
                {
                  name:"小黄",
                  level:2,
                  isOpen:true,
                  children:[]
                },
                {
                  name:"小蓝",
                  level:2,
                  isOpen:true,
                  children:[]
                }
              ]
            }
          ]
      	},
        length:2
      }
    },
	  computed:{
	    ...mapGetters({
	      todoCount:"nCounts"
	    })
	  },
	  components:{
	    todoInput,
	    todoList,
	    tree,
	    Tables
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-aside {
    /*background-color: #f4f5f6;*/
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
    margin:20px 0px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.03);
   }
  
   .el-main {
    /*background-color: #f4f5f6;*/
    color: #333;
    text-align: center;
   /* line-height: 160px;*/
    margin:20px 20px 20px 0px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.03);
  }

</style>
