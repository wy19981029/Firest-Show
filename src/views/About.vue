<template>
  <div class="about">
	  <img-module :bute="imglist" class="bigimg"></img-module>
	  <div class="phonez">
	  	<div v-for="item in phonelist" >
	  		<router-link :to="`/ask/${item.title}`"><phone :phoneshow="item"></phone></router-link>
	  	</div>
	  </div>
	
  </div>
</template>

<script>
	import ImgModule from '@/components/ImgModule.vue'
	import Phone from '@/components/Phone.vue'
	export default{
		data(){
			return{
				imglist:[
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
					"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bb7101afd301b77d8558bf43dff8b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
				],
				phonelist:[
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"小米9 Pro 5G",
						desc:"5G双卡全网通，骁龙855Plus",
						price:3699,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi 8",
						desc:"5000mAh超长续航",
						price:799,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi Note 8 Pro",
						desc:"6400万全场景四摄",
						price:1399,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi Note 8",
						desc:"千元4800万四摄",
						price:999,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi K20 Pro 尊享版",
						desc:"骁龙855 Plus， 弹出全面屏",
						price:2699,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi Note 7 ",
						desc:"4800万拍照千元机",
						price:1099,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi7",
						desc:"4000mAh超长续航",
						price:899,
						
					},
					{
						imgs:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg?thumb=1&w=200&h=200&f=webp&q=90",
						title:"Redmi 7A",
						desc:"小巧大电量 持久流畅",
						price:579,
						
					},
				]
			}
		},
		components:{
			ImgModule,
			Phone
		}
	}
	
	
</script>

<style scoped="scoped">
.about{
		width: 1000px;
		margin: 0 auto;
	}
.phonez{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

</style>