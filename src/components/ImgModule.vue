<template>
	<div>
		<div v-for="item,index in bute" v-show="index==num" class="bigimg">
			<img :src="item" alt="" >
		</div>
		<div v-for="item,index in bute" class="d2" @mouseenter="inl" @mouseleave="outl" @click="num=index">
			<span></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				flag:true
			}
		},
		props:["bute"],
		methods:{
			add(){
				setInterval(()=>{
					if(this.flag){
						this.num++
						if(this.num>=this.bute.length){
						this.num=0
						}
					}
				},2000)
			},
			inl(){
				this.flag=false
			},
			outl(){
				this.flag=true
			},
			
			
		},
		created() {
			this.add()
		}
	}
</script>

<style>
	.d2{
		display: inline-block;
		margin: 0 10px 10px;
		background-color: #030303;
		width: 30px;
		height: 30px;
		border-radius: 10px;
		position: relative;
		top: -50px;
	}


</style>
