<template>
	<div>
	<div>
		<mt-header title="航线管理">
			<router-link to='' slot="left">
				<mt-button icon="back" @click="$router.back(-1)">返回</mt-button>

			</router-link>
			<mt-button icon="search" slot="right" class="rightButton" @click="search()"></mt-button>
			<mt-button  slot="right"  class="rightButton" @click="more()">新增</mt-button>
			
		</mt-header>
	</div>

  <div>
  	
  	<mt-cell  v-for="airLine in airLines" :title="airLine.city" :label="airLine.code"></mt-cell>
 	
  </div>
</div>
</template>
<style>



.rightButton
{
	width:50px;
}
</style>


<script>

	export default{
		data(){
			return{
				airLines:[
					{
					city:'成都广州',
					code:'ctuglz',
					},
					{
					city:'北京广州',
					code:'pkuglz',
					},
					{
					city:'南京上海',
					code:'njnsha',
					}
					
				]
			};
		},
		methods:{
			search()
			{
				this.$router.push({path:'airLineSearch'});
			},
			more()
			{
				this.$router.push({path:'airLineAdd'});

			}
		}

	}
</script>