<template>
	<div>
		<h1>商品:{{this.$route.params.id}}</h1>
		<p>价格:{{this.goods.price}}</p>
		<button @click="adcar">添加到购物车</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				goods:{
					num:1,
					price:parseInt(Math.random()*1000)
				}
			}
		},
		methods:{
			adcar(){
				this.$store.commit("addcars",{
					name:this.$route.params.id,
					price:this.goods.price,
					num:1
				})
			}
		}

	}
</script>

<style>
</style>
