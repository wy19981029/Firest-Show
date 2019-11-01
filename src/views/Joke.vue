<template>
	<div>
		<h1>段子页面</h1>
		<div v-for="item in jokes" class="jokes">
			<h2>{{item.title}}</h2>
			<p>{{item.summary}}</p>
		</div>
		<div class="buto">
			<button  @click="add">加载更多</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				jokes:[],
				page:1,
				
			}
		},
		created() {
			this.getjoke()
		},
		methods:{
			add(){
				this.page++
				this.getjoke(this.page)
			},
			getjoke(page){
				this.$http({
					method:"get",
					url:`http://biger.applinzi.com/duan/list.php?page=${this.page}`,
				}).then(yes=>{
					console.log(yes.data.result)
					this.jokes=this.jokes.concat(yes.data.result);
					
				})
			},
		}
			
	
	}
	
</script>

<style  scoped="scoped">
	.jokes{
		border-bottom: 3px dotted #42B983;
	}
	.buto{
		margin-top: 50px;
	}
	.buto button{
		height: 50px;
		width: 100%;
	}
</style>
