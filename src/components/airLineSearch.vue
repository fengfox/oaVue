<template>
	<div>
	<div>
		<mt-header title="航线搜索">
			<router-link  to="" slot="left">
				<mt-button icon="back" @click="$router.back(-1)" >返回</mt-button>

			</router-link>
		</mt-header>
	</div>
	<div class="page-search">
    <mt-search autofocus v-model="value" @keyup.enter.native="searchResult()">
    	<!--
    	<mt-cell
   		 v-for="item in result"
   		 :title="item.code"
   		 :value="item.city" is-link :to="{ path: 'airLineResult',query:{code:item.code,city:item.city} }">
 	 </mt-cell>
		-->
 	   <div>
  	
  	<mt-cell v-for="item in result" :title="item.city" :label="item.code" :to="{ path: 'airLineResult',query:{code:item.code,city:item.city}}"></mt-cell>
 	
  </div>
    </mt-search>
  </div>

</div>
</template>
<style>
  .page-search {
    height: 100%;
  }
.mint-search-list-warp
 {
 	margin-top: 60px;
 }
 li
 {
 	list-style-type: none;
 }
</style>


<script>


	export default{
		name:'page-search',
		data(){
			return{
				value:'',
				result:[
				

				]
				
				
			};
		},
		methods:
		{
			searchResult()
			{
				//console.log("确认事件");
				this.result=[{
					code:'CTUPEK',
					city:'成都北京'
				},
				{
					code:'PEKGLZ',
					city:'北京广州'
				}];
			}


		},
		computed:
		{
			


		}
	}
</script>