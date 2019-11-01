<template>
	<div class="phonez">
		<div class="pni">
			<img :src="phoneshow.imgs" alt="">
			<h2>{{phoneshow.title}}</h2>
			<p>{{phoneshow.desc}}</p>
			<p>{{phoneshow.price}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:["phoneshow"]
	}
</script>

<style>
	

</style>
