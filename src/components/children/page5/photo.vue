<template>
	<div id="imgWrap">
		<div class="photo">
			<div class="clearfix "></div>
			<p >两张图片的背景</p>
			<div class="two">
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
			</div>
			<p >下倒影</p>
			<p class="reflect-bottom-p"><img :src="photos" class="reflect-bottom"></p>
			<p>右倒影同时有偏移</p>
			<p><img :src="photos" class="reflect-right-translate"></p>
			<p>下倒影（渐变）</p>
			<p class="reflect-bottom-p"><img :src="photos" class="reflect-bottom-mask"></p>
			<p style="margin-top: 50px;">下倒影（png图片）</p>
			<p class="reflect-bottom-p"><img :src="photos" class="reflect-bottom-img"></p>
			<div class="dis-none">这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏这里将会超出隐藏</div>
		</div>
		<div id="photo-words">
			<div class="Media">
			  <img class="Media-figure" :src="logo" alt="">
			  <p class="Media-body"> 会超出隐藏这里将会超出隐藏会超出隐藏这里将会超出隐藏</p>
			</div>
		</div>
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
	#imgWrap{width: 960px;margin: 0 auto;}
	.two{
		border:1px dashed black;
	    padding:35px;
	    background-size: contain;
	    background:url('../../../assets/photo.png') no-repeat left,url('../../../assets/shou.png') no-repeat right;
	}
	.reflect-bottom-p {
	    padding-bottom: 300px;
	}
	.reflect-bottom {
	    -webkit-box-reflect: below;
	}
	.reflect-right-translate {
	    -webkit-box-reflect: right 10px;
	}
 	.reflect-bottom-mask {
	    -webkit-box-reflect: below 0 linear-gradient(transparent, white);
	}
	.reflect-bottom-img {
	    -webkit-box-reflect: below 0 url(../../../assets/shou.png);
	}
	.dis-none{
		width:400px;
	    margin:0 auto;
	    overflow : hidden;
	    border:1px solid #ccc;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    line-height:30px;
    	height:60px;
		
	}
	.Media {
	  display: flex;
	  align-items: flex-start;
	}
	
	.Media-figure {
	  margin-right: 1em;
	}
	
	.Media-body {
	  flex: 1;
	}
</style>
