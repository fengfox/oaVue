<template>
	<div>
	<div>
		<mt-header title="搜索结果">
			<router-link to="" slot="left">
				<mt-button icon="back" @click="$router.back(-1)" >返回</mt-button>

			</router-link>
		</mt-header>
	</div>
	  
	  	  <div>
	  		<mt-cell  :title="this.$route.query.city" :label="this.$route.query.code" ></mt-cell>
  			<mt-button size="large" type="primary" @click="goAirLine()">确定</mt-button>
 	 </div>
</div>
</template>
<style>

.city
{
	width:30%;
	float:left;
	margin-left:20px;
}

.code
{
	
}

li
{
	list-style-type:none;
	
	margin-top: 20px;
}
</style>


<script>

	export default{
		data(){
			return{
				
				
			};
		},
		methods:
		{
			goAirLine()
			{
				this.$router.push({path:"airLine"});
			}
		}
	}
</script>