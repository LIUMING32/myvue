<template>
	<div class="contain" >
		<div class="clearfix"></div>
		<div class="block">
		    <el-carousel height="660px">
		      <el-carousel-item v-for="(item, index) in items" :key="item.index">
		      	<img :src="item.imgUrl" alt="" />
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div style="max-width: 960px;margin: 0 auto;">
			<el-container >
			    <el-main>
			  	    <el-tabs v-model="activeName" @tab-click="handleClick">
					    <el-tab-pane label="用户管理" name="first">
					    						    	
					    </el-tab-pane>
					    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				    </el-tabs>
			    </el-main>
			  	<el-aside width="200px">
			  	<el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>热门标签</span>
				    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				  </div>
				  <ul>
				  	<li v-for="but in buts" :key="but.but1" class="text item"><el-button round>{{but.but1 }}</el-button>  <el-button round>{{but.but2}}</el-button></li>
				  </ul>
				</el-card>
				<el-card class="box-card">
				  <div slot="header" class="clearfix">
				    <span>优秀作者</span>
				    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				  </div>
				  <div v-for="number in nums" :key="number.num" class="text item">
				    {{'列表内容 ' + number.num }}
				  </div>
				  
				</el-card>
			  	
			  </el-aside>
			</el-container>
		</div>
	</div>
</template>

<script>
import banner3 from '../../../assets/ball.png'
import banner4 from '../../../assets/tuya.png'
export default {
  data () {
    return {
      navs: '这里是page2子页面',
      activeName: 'first',
      items:[
      	{imgUrl: banner3},{imgUrl: banner4},{imgUrl: banner3},{imgUrl: banner4}
      ],
      buts:[
      	{but1: '前端',but2: '前端',},{but1: '产品经理',but2: 'ios工程师',},{but1: '安卓高级工程师',but2: '前端',},{but1: 'php',but2: 'java',}
      ],
      nums:[
      	{num: '1'},{num2: '2'},{num3: '3'},{num4: '4'}
      ]
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul{padding: 0px;}
	li{list-style: none;}
	hr{visibility: hidden;margin-bottom: 0px;margin-top: 10px;}
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
  	}

  	.el-carousel__item:nth-child(2n) {
    	background-color: #99a9bf;
  	}
  
    .el-carousel__item:nth-child(2n+1) {
    	background-color: #d3dce6;
    }
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
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .el-card {
    border:0px;
  }
  .el-button.is-round{padding: 12px 20px;}
</style>
