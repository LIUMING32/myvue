<template>
	<div class="contain" >
		<div class="clearfix"></div>
		<div class="block">
		    <el-carousel height="660px">
		      <el-carousel-item v-for="(item, index) in items" :key="item.index">
		      	<img :src="item.img" alt="" />
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div style="margin: 0 auto;width: 960px;">
			<p>123333{{test}} </p>
	  	    <el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="表单" name="first">
			    	<el-form ref="form" :model="form" label-width="80px">
					  <el-form-item label="活动名称">
					    <el-input v-model="form.name"></el-input>
					  </el-form-item>
					  <el-form-item label="活动区域" >
					    <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%;">
					      <el-option label="区域一" value="shanghai"></el-option>
					      <el-option label="区域二" value="beijing"></el-option>
					    </el-select>
					  </el-form-item>
					  <el-form-item label="活动时间">
					    <el-col :span="11">
					    	<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					    </el-col>
					    <el-col class="line" :span="2">-</el-col>
					    <el-col :span="11">
					      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					    </el-col>
					  </el-form-item>
					  <el-form-item label="即时配送">
					    <el-switch v-model="form.delivery" style="float: left;"></el-switch>
					  </el-form-item>
					  <el-form-item label="活动性质">
					    <el-checkbox-group v-model="form.type" style="float: left;">
					      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					      <el-checkbox label="地推活动" name="type"></el-checkbox>
					      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
					      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
					    </el-checkbox-group>
					  </el-form-item>
					  <el-form-item label="特殊资源" >
					    <el-radio-group v-model="form.resource" style="float: left;">
					      <el-radio label="线上品牌商赞助"></el-radio>
					      <el-radio label="线下场地免费"></el-radio>
					    </el-radio-group>
					  </el-form-item>
					  <el-form-item label="活动形式" >
					    <el-input type="textarea" v-model="form.desc"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="onSubmit">立即创建</el-button>
					    <el-button>取消</el-button>
					  </el-form-item>
					</el-form>
			    </el-tab-pane>
			    <el-tab-pane label="瀑布流" name="second">
		    		<el-row :gutter="20">
					  <el-col :span="8" v-for="(o, index) in 6" :key="o" >
					    <el-card :body-style="{ padding: '0px' }">
					      <img :src="hamburger" class="image">
					      <div style="padding: 14px;">
					        <span>好吃的汉堡</span>
					        <div class="bottom clearfix">
					          <time class="time">{{ currentDate }}</time>
					          <el-button type="text" class="button">操作按钮</el-button>
					        </div>
					      </div>
					    </el-card>
					  </el-col>
					</el-row>
			    	
			    </el-tab-pane>
			    <el-tab-pane label="角色管理" name="third">
			    	<ul>
					    <li v-for="item in people"  ref="refContent">{{item}}</li>
					</ul>
			    </el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		    </el-tabs>
		</div>
	</div>
</template>

<script>
//import banner1 from '../../../assets/bilishi.jpeg'
//import banner2 from '../../../assets/beijiaer.jpeg'
//import banner3 from '../../../assets/maple.jpeg'
//import banner4 from '../../../assets/ruishi.jpeg'
import hamburger from '../../../assets/hamburger.png'
export default {
  data () {
    return {
   
      navs: '这里是page2子页面',
      activeName: 'first',
      people:['三姑','四婶','五叔','六姨','七舅姥爷'],	
//   items:[
//    	{imgUrl: banner1},{imgUrl: banner2},{imgUrl: banner3},{imgUrl: banner4}
//    ],
      items:'',
      test:'',
      buts:[
      	{but1: '前端',but2: '前端',},{but1: '产品经理',but2: 'ios工程师',},{but1: '安卓高级工程师',but2: '前端',},{but1: 'php',but2: 'java',}
      ],
      nums:[
      	{num: '1'},{num2: '2'},{num3: '3'},{num4: '4'}
      ],
      currentDate: new Date(),
      hamburger:hamburger,
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
       },
    }
  },
    created: function() {
	    this.$nextTick(() => {
	        console.log(this.$refs.refContent)
	    })
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       onSubmit() {
        console.log('submit!');
      }
    },
    mounted: function () {          // 挂在完成后的生命周期钩子注册。
	    this.$nextTick(() => {  // 等待下一次更新完成后执行业务处理代码。
	    	axios.get('../../../../static/json/banner.json')
			  .then(function(response){
			  	var data = response.data;
			  	console.log(data.banner);
			  	console.log(data.test);
	//		  	this.items.push(data.banner);
				this.test = data.test;
			  	console.log(items);
			  })
			  .catch(function(err){
			    console.log(err);
			  });
	    })
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .image {
    width: 100%;
    display: block;
  }

</style>
