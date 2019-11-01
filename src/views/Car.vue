<template>
	<div>
		<div>
			<table cellpadding="" cellspacing="" border="">
				<tr><th>商品名</th><th>单价</th><th>数量</th></tr>
				<tr  v-for="item in this.$store.state.phones"><td>{{item.name}}</td><td>{{item.price}}</td><td>{{item.num}}</td></tr>
			</table>
		</div>
	
	</div>
</template>

<script>
</script>

<style>
</style>
