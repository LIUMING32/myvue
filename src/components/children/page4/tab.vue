<template>
	<div id="Wrap">
		<!--<Lunbo></Lunbo>-->
		<div id="tab">
		    <div class="tab-tit">
		        <!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
		        <a href="javascript:;" @click="changes(0)" :class="{'cur':curId===0}">html</a>
		        <a href="javascript:;" @click="changes(1)" :class="{'cur':curId===1}">css</a>
		        <a href="javascript:;" @click="changes(2)" :class="{'cur':curId===2}">javascript</a>
		        <a href="javascript:;" @click="changes(3)" :class="{'cur':curId===3}">vue</a>
		    </div>
		    <div class="tab-con">
		        <!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->
		        <div v-show="curId===0">
		            <h1>{{testText}}</h1>
		            <br/>
		        </div>
		        <div v-show="curId===1">
		        	
		           
		        </div>
		        <div v-show="curId===2">
		            javascript
		        </div>
		        <div v-show="curId===3">
		            vue
		        </div>
		    </div>
		</div>
	</div>
</template>
 
<script>

export default {
  name: 'headerDiv',
  inpuTxt:'',
  data () {
    return {
        curId: 0,
        testText:'欢迎浏览',
    }
  },
   methods:{
	  	changes: function(cur){
	  		this.$data.curId = cur;
	  	},
   },
    computed: {
	},
    mounted:function () {
        
    },
    directives:{
	   
	},
	components:{
	  
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body{
        font-family:"Microsoft YaHei";
    }
    #tab,#Wrap{
        width: 960px;
        margin: 0 auto;
    }
    .tab-tit{
        font-size: 0;
        width: 960px;
        overflow: hidden;
    }
    .tab-tit a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        width: 25%;
        text-align: center;
        background: #ccc;
        color: #333;
        text-decoration: none;
       /* float: left;*/
    }
    .tab-tit .cur{
        background: #09f;
        color: #fff;
    }
    .tab-con div{
        border: 1px solid #ccc;
        height: 100px;
        padding-top: 20px;
    }
	        .fl{
            float: left;
        }
        .fr{
            float: right;
        }
       blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, img, input, li, ol, p, table, td, textarea, th, ul {
            margin: 0;
            padding: 0;
        }
       .clearfix{
          zoom: 1;
       }
        .clearfix:after {
            clear: both;
        }
        .clearfix:after {
            content: '.';
            display: block;
            overflow: hidden;
            visibility: hidden;
            font-size: 0;
            line-height: 0;
            width: 0;
            height: 0;
        }
        a{
            text-decoration: none;
            color: #333;
        }
        img{vertical-align: middle;}
       
	    
    </style>

