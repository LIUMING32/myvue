<template>
	<div id="Wrap">
		<!--<Lunbo></Lunbo>-->
		<tab></tab>
		<div class="page-shopping-cart" id="shopping-cart">
		    <h4 class="cart-title">购物清单</h4>
		    <div class="cart-product-title clearfix">
		        <div class="td-check fl"><span class="check-span fl check-all" :class="{'check-true':isSelectAll}"@click="selectProduct(isSelectAll)"></span>全选</div>
		        <div class="td-product fl">商品</div>
		        <div class="td-num fl">数量</div>
		        <div class="td-price fl">单价(元)</div>
		        <div class="td-total fl">金额(元)</div>
		        <div class="td-do fl">操作</div>
		    </div>
		    <div class="cart-product clearfix">
		        <table>
		            <tbody>
			            <!--遍历的时候带上索引-->
						<tr v-for="(item,index) in productList">
						    <td class="td-check"><span class="check-span" @click="item.select=!item.select" :class="{'check-true':item.select}"></span></td>
						    <td class="td-product"><img :src="item.pro_img" width="98" height="98">
						        <div class="product-info">
						            <h6>{{item.pro_name}}</h6>
						            <p>品牌：{{item.pro_brand}}&nbsp;&nbsp;产地：{{item.pro_place}}</p>
						            <p>规格/纯度:{{item.pro_purity}}&nbsp;&nbsp;起定量：{{item.pro_min}}</p>
						            <p>配送仓储：{{item.pro_depot}}</p>
						        </div>
						        <div class="clearfix"></div>
						    </td>
						    <td class="td-num">
						        <div class="product-num">
						            <a href="javascript:;" class="num-reduce num-do fl" @click="item.pro_num--"><span></span></a>
						            <input type="text" class="num-input" v-model="item.pro_num">
						            <a href="javascript:;" class="num-add num-do fr" @click="item.pro_num++"><span></span></a>
						        </div>
						    </td>
						    <td class="td-price">
						        <p class="red-text">￥<span class="price-text">{{item.pro_price.toFixed(2)}}</span></p>
						    </td>
						    <td class="td-total">
						        <p class="red-text">￥<span class="total-text">{{item.pro_price*item.pro_num}}</span>.00</p>
						    </td>
						    <td class="td-do"><a href="javascript:;" class="product-delect" @click="deleteOneProduct(index)">删除</a></td>
						</tr>

		            </tbody>
		        </table>
		    </div>
		    <div class="cart-product-info">
		        <a class="delect-product" href="javascript:;" @click="deleteProduct"><span></span>删除所选商品</a>
		        <a class="keep-shopping" href="#"><span></span>继续购物</a>
		        <a class="btn-buy fr" href="javascript:;">去结算</a>
		        <p class="fr product-total">￥<span>{{getTotal.totalPrice}}</span></p>
				<p class="fr check-num"><span>{{getTotal.totalNum}}</span>件商品总计（不含运费）：</p>
		    </div>
		    <div class="cart-worder clearfix">
		        <!--<a href="javascript:;" class="choose-worder fl"><span></span>绑定跟单员</a>
		        <div class="worker-info fl">
		        </div>-->
		    </div>
		</div>
		<div id="list" class="main">
			<h2>小目标列表</h2>
            <div class="list">
                <h3>添加小目标</h3>
                <input type="text" class="text-keyword" placeholder="输入小目标后，按回车确认" @keyup.13='addList' v-model="addText"/>
		        <!--如果noend等于0，就是全部完成了就显示‘全部完成了’，如果没有就是显示已完成多少条（prolist.length-noend）和未完成多少条（noend）-->
		        <p>共有{{prolist.length}}个目标，{{noend==0?"全部完成了":'已完成'+(prolist.length-noend)+'，还有'+noend+'条未完成'}}</p>
		        <p>
		            <input type="radio" name="chooseType" checked="true" @click='chooseList(1)'/><label>所有目标</label>
		            <input type="radio" name="chooseType" @click='chooseList(2)'/><label>已完成目标</label>
		            <input type="radio" name="chooseType" @click='chooseList(3)'/><label>未完成目标</label>
		        </p>
            </div>
            <ul>
		        <li class="li1" v-for="(list,index) in newList" :class="{'eidting':curIndex===index}">
		            <div>
		                <span class="status-span" @click="changeType(index)" :class="{'status-end':list.status}"></span>
		                <span @dblclick="curIndex=index">{{list.name}}</span>
		                <span class="close" @click='delectList(list)'>X</span>
		            </div>
		            <input type="text" class="text2" v-model='list.name' @keyup.esc='cancelEdit(list)' @blur='edited' @focus='editBefore(list.name)' @keyup.enter='edited' v-focus/>
		        </li>
		    </ul>

		</div>
	</div>
</template>
 
<script>
import Lunbo from './lunbo.vue';	
import tab from './tab.vue';	
export default {
  name: 'headerDiv',
  inpuTxt:'',

  data () {
    return {
        curId: 0,
        productList:[
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': '../../static/images/checks.png',//图片链接
                'pro_img2': '../../static/images/adds.png',//图片链接
                'pro_price': 800//单价
            },
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': '../../static/images/checks.png',//图片链接
                'pro_img2': '../../static/images/adds.png',//图片链接
                'pro_price': 800//单价
            }
        ],
        addText:'',
        //name-名称,status-完成状态
        prolist:[
               {name:"HTML5",status:false},
               {name:"CSS3",status:false},
               {name:"vue",status:false},
               {name:"react",status:false}
        ],
        newList:[],
        curIndex:'',
        beforeEditText:"",
        curType:0,
        nowIndex:0,
        testText:'欢迎浏览',
    }
  },
   methods:{
	  	changes: function(cur){
	  		this.$data.curId = cur;
	  	},
	  	//全选与取消全选
	    selectProduct:function(_isSelect){
	        //遍历productList，全部取反
	        for (var i = 0, len = this.productList.length; i < len; i++) {
	            this.productList[i].select = !_isSelect;
	        }
	    },
	    //删除已经选中(select=true)的产品
		deleteProduct:function () {
		    this.productList=this.productList.filter(function (item) {return !item.select})
		},
		//删除单条产品
		deleteOneProduct:function (index) {
		    //根据索引删除productList的记录
		    this.productList.splice(index,1);
		},
		addList(){
	        //添加进来默认status=false,就是未完成状态
	        this.prolist.push({
	            name:this.addText,
	            status:false
	        });
	        //添加后，清空addText
	        this.addText="";
	    },
	    chooseList(type){
	        //type=1时，选择所有目标
	        //type=2时，选择所有已完成目标
	        //type=3时，选择所有未完成目标
	        switch(type){
	            case 1:this.newList=this.prolist;break;
	            case 2:this.newList=this.prolist.filter(function(item){return item.status});break;
	            case 3:this.newList=this.prolist.filter(function(item){return !item.status});break;
	        }
	    },
	     /*改变单条数据的完成状态*/
        changeType(index){
            this.newList[index].status=!this.newList[index].status;
            //更新数据
            this.chooseList(this.curType);
        },
	    delectList(index){
	        //根据索引，删除数组某一项
	        this.prolist.splice(index,1);
	        //更新newList  newList可能经过this.prolist.filter()赋值，这样的话，删除了prolist不会影响到newList  那么就要手动更新newList
	        this.newList=this.prolist;
	    },
	    //修改前
	    editBefore(name){
	        //先记录当前项（比如这一项，{name:"HTML5",status:false}）
	        //beforeEditText="HTML5"
	        this.beforeEditText=name;
	    },
	    //修改完成后
	    edited(){
	        //修改完了，设置curIndex=""，这样输入框就隐藏，其它元素就会显示。因为在li元素 写了：:class="{'eidting':curIndex===index}"  当curIndex不等于index时，eidting类名就清除了！
	        //输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步只是清除eidting类名，隐藏输入框而已
	        //还有一个要注意的就是虽然li遍历的是newList，比如改了newList的这一项（{name:"HTML5",status:false}），比如改成这样（{name:"HTML",status:true}）。实际上prolist的这一项（{name:"HTML5",status:false}），也会被改成（{name:"HTML",status:true}）。因为这里是一个对象，而且公用一个堆栈！修改其中一个，另一个会被影响到
	        this.curIndex="";
	    },
	    //取消修改
	    cancelEdit(val){
	        //上面说了输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步就是把之前保存的beforeEditText赋值给当前项的name属性，起到一个恢复原来值得作用！
	        val.name=this.beforeEditText;
	        this.curIndex="";
	    }


   },
    computed: {
	    isSelectAll:function(){
	        //如果productList长度为0
	        if(this.productList.length===0){
	            return false;
	        }
	        //如果productList中每一条数据的select都为true，返回true，否则返回false;
	        return this.productList.every(function (val) { return val.select});
	    },
	    //获取总价和产品总件数
	    getTotal:function(){
	        //获取productList中select为true的数据。
	        var _proList=this.productList.filter(function (val) { return val.select}),totalPrice=0;
	        for(var i=0,len=_proList.length;i<len;i++){
	            //总价累加
	            totalPrice+=_proList[i].pro_num*_proList[i].pro_price;
	        }
	        //选择产品的件数就是_proList.length，总价就是totalPrice
	        return {totalNum:_proList.length,totalPrice:totalPrice}
	    },
	    noend:function(){
            return this.prolist.filter(function(item){
                return !item.status
            }).length;
        }

	},
    mounted:function () {
        //为productList添加select（是否选中）字段，初始值为true
        var _this=this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'select', true);
        })
        //要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
        //this.productList.map(function (item) {item.select=true})
        this.newList=this.prolist;
        let timer = setInterval(function(){
            this.nowIndex++;
            switch (this.nowIndex) {
                case 1:
                    this.testText = '守候的文章';
                    break;
                case 2:
                    this.testText = '愿您浏览愉快';
                    break;
                case 3:
                    this.testText = '学到知识';
                    break;
            }
            if (this.nowIndex > 3) {
                setTimeout(() => {
                    clearInterval(timer);
                }, 2000)
            }
        }, 2000)

    },
    directives:{
	    "focus":{
	        update(el){
	            el.focus();
	        }
	    }
	},
	components:{
	    Lunbo,
	    tab
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
        .page-shopping-cart {
            width: 960px;
            margin: 50px auto;
            font-size: 14px;
            border: 1px solid #e3e3e3;
            border-top: 2px solid #317ee7; }
        .page-shopping-cart .cart-title {
            color: #317ee7;
            font-size: 16px;
            text-align: left;
            padding-left: 20px;
            line-height: 68px; }
        .page-shopping-cart .red-text {
            color: #e94826; }
        .page-shopping-cart .check-span {
            display: block;
            width: 24px;
            height: 20px;
            background: gainsboro url("../../../../static/images/checks.png") no-repeat 0 0; }
        .page-shopping-cart .check-span.check-true {
            background: gray url("../../../../static/images/checks.png") no-repeat}
        .page-shopping-cart .td-check {
            width: 70px; }
        .page-shopping-cart .td-product {
            width: 460px; }
        .page-shopping-cart .td-num, .page-shopping-cart .td-price, .page-shopping-cart .td-total {
            width: 160px; }
        .page-shopping-cart .td-do {
            width: 150px; }
        .page-shopping-cart .cart-product-title {
            text-align: center;
            height: 38px;
            line-height: 38px;
            padding: 0 20px;
            background: #f7f7f7;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3; }
        .page-shopping-cart .cart-product-title .td-product {
            text-align: center;
            font-size: 14px; }
        .page-shopping-cart .cart-product-title .td-check {
            text-align: left; }
        .page-shopping-cart .cart-product-title .td-check .check-span {
            margin: 9px 6px 0 0; }
        .page-shopping-cart .cart-product {
            padding: 0 20px;
            text-align: center; }
        .page-shopping-cart .cart-product table {
            width: 100%;
            text-align: center;
            font-size: 14px; }
        .page-shopping-cart .cart-product table td {
            padding: 20px 0; }
        .page-shopping-cart .cart-product table tr {
            border-bottom: 1px dashed #e3e3e3; }
        .page-shopping-cart .cart-product table tr:last-child {
            border-bottom: none; }
        .page-shopping-cart .cart-product table .product-num {
            border: 1px solid #e3e3e3;
            display: inline-block;
            text-align: center; }
        .page-shopping-cart .cart-product table .product-num .num-do {
            width: 24px;
            height: 28px;
            display: block;
            background: #f7f7f7; }
        .page-shopping-cart .cart-product table .product-num .num-reduce span {
            background: green url("../../../../static/images/checks.png") no-repeat ;
            display: block;
            width: 6px;
            height: 2px;
            margin: 13px auto 0 auto; }
        .page-shopping-cart .cart-product table .product-num .num-add span {
            background: green url("../../../../static/images/checks.png") no-repeat;
            display: block;
            width: 8px;
            height: 8px;
            margin: 10px auto 0 auto; }
        .page-shopping-cart .cart-product table .product-num .num-input {
            width: 42px;
            height: 28px;
            line-height: 28px;
            border: none;
            text-align: center; }
        .page-shopping-cart .cart-product table .td-product {
            text-align: left;
            font-size: 12px;
            line-height: 20px; }
        .page-shopping-cart .cart-product table .td-product img {
            border: 1px solid #e3e3e3;
            margin-right: 10px; }
        .page-shopping-cart .cart-product table .td-product .product-info {
            display: inline-block;
            vertical-align: middle; }
        .page-shopping-cart .cart-product table .td-do {
            font-size: 12px; }
        .page-shopping-cart .cart-product-info {
            height: 50px;
            line-height: 50px;
            background: #f7f7f7;
            padding-left: 20px; }
        .page-shopping-cart .cart-product-info .delect-product {
            color: #666; }
        .page-shopping-cart .cart-product-info .delect-product span {
            display: inline-block;
            vertical-align: top;
            margin: 18px 8px 0 0;
            width: 13px;
            height: 15px;
            background: red url("../../../../static/images/checks.png") no-repeat; }
        .page-shopping-cart .cart-product-info .product-total {
            font-size: 14px;
            color: #e94826; }
        .page-shopping-cart .cart-product-info .product-total span {
            font-size: 20px; }
        .page-shopping-cart .cart-product-info .check-num {
            color: #333; }
        .page-shopping-cart .cart-product-info .check-num span {
            color: #e94826; }
        .page-shopping-cart .cart-product-info .keep-shopping {
            color: #666;
            margin-left: 40px; }
        .page-shopping-cart .cart-product-info .keep-shopping span {
            display: inline-block;
            vertical-align: top;
            margin: 18px 8px 0 0;
            width: 15px;
            height: 15px;
            background: green url("../../../../static/images/checks.png") no-repeat ; }
        .page-shopping-cart .cart-product-info .btn-buy {
            height: 50px;
            color: #fff;
            font-size: 20px;
            display: block;
            width: 110px;
            background: #ff7700;
            text-align: center;
            margin-left: 30px; }
        .page-shopping-cart .cart-worder {
            padding: 20px; }
        .page-shopping-cart .cart-worder .choose-worder {
            color: #fff;
            display: block;
            background: #39e;
            width: 140px;
            height: 40px;
            line-height: 40px;
            border-radius: 4px;
            text-align: center;
            margin-right: 20px; }
        .page-shopping-cart .cart-worder .choose-worder span {
            display: inline-block;
            vertical-align: top;
            margin: 9px 10px 0 0;
            width: 22px;
            height: 22px;
            background: gold url("../../../../static/images/checks.png") no-repeat; }
        .page-shopping-cart .cart-worder .worker-info {
            color: #666; }
        .page-shopping-cart .cart-worder .worker-info img {
            border-radius: 100%;
            margin-right: 10px; }
        .page-shopping-cart .cart-worder .worker-info span {
            color: #000; }

        .choose-worker-box {
            width: 620px;
            background: #fff; }
        .choose-worker-box .box-title {
            height: 40px;
            line-height: 40px;
            background: #F7F7F7;
            text-align: center;
            position: relative;
            font-size: 14px; }
        .choose-worker-box .box-title a {
            display: block;
            position: absolute;
            top: 15px;
            right: 16px;
            width: 10px;
            height: 10px;
            background: grey url("../../../../static/images/checks.png") no-repeat ; }
        .choose-worker-box .box-title a:hover {
            background: black url("../../../../static/images/checks.png") no-repeat; }
        .choose-worker-box .worker-list {
            padding-top: 30px;
            height: 134px;
            overflow-y: auto; }
        .choose-worker-box .worker-list li {
            float: left;
            width: 25%;
            text-align: center;
            margin-bottom: 30px; }
        .choose-worker-box .worker-list li p {
            margin-top: 8px; }
        .choose-worker-box .worker-list li.cur a {
            color: #f70; }
        .choose-worker-box .worker-list li.cur a img {
            border: 1px solid #f70; }
        .choose-worker-box .worker-list li a:hover {
            color: #f70; }
        .choose-worker-box .worker-list li a:hover img {
            border: 1px solid #f70; }
        .choose-worker-box .worker-list li img {
            border: 1px solid #fff;
            border-radius: 100%; }
        
        /*列表的样式*/
 		body{font-family: "微软雅黑";font-size: 14px;}
        input{font-size: 14px;}
        body,ul,div,html{padding: 0;margin: 0;}
        .hidden{display: none;}
        .main{width: 800px;margin: 0 auto;}
        li{list-style-type: none;line-height: 40px;position: relative;border: 1px solid transparent;padding: 0 20px;}
        li .status-span{display: block;width: 10px;height: 10px;background: #ccc;margin: 14px 10px 0 0 ;float: left;}
        li .status-span.status-end{
            background: #09f;
        }
        li .close{position: absolute;color: #f00;font-size: 20px;line-height: 40px;height: 40px;right: 20px;cursor: pointer;display: none;top: 0;}
        li:hover{border: 1px solid #09f;}
        li:hover .close{display: block;}
        li div{display: block;}
        li.eidting div{display: none;}
        li .text2{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
        li.eidting .text2{display: block;}
        li .text-keyword{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
        .text-keyword{box-sizing: border-box;width: 100%;height: 40px;padding-left: 10px;outline: none;}
        /*动画的样式*/
        h1 {
	        color: black;
	        text-transform: uppercase;
	        text-align: center;
	        font-size: 24px;
	        line-height: 1;
	        animation: letterspacing 1s 7 alternate ease-in-out;
	        display: block;
	        letter-spacing: .5rem;
	    }
	
	    @keyframes letterspacing {
	        0% {
	            letter-spacing: -72px;
	            filter: blur(20px);
	        }
	
	        40% {
	            filter: blur(6px);
	        }
	
	        80% {
	            letter-spacing: 8px;
	            filter: blur(0);
	        }
	    }
	    
    </style>

