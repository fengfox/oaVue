<template>
	         
<div class="page-search">	
	<mt-header title="航线查询">  
          <router-link to= '' slot="left">  
            <mt-button  icon="back" @click="$router.back(-1)">返回</mt-button>  
          </router-link>		
        </mt-header>
        <form action="" target="frameFile">
    <mt-search  cancel-text="取消"  v-model="value" @keyup.enter.native="searchResult(value)">
    	<!--
    	<mt-cell
   		 v-for="item in result"
   		 :title="item.code"
   		 :value="item.city" is-link :to="{ path: 'airLineResult',query:{code:item.code,city:item.city} }">
 	 </mt-cell>
		-->
 	  
  	
  	<mt-cell v-for="item in result" :title="item.segmentName" :label="item.segmentCode" :to="{ path: 'airLineResult',query:{code:item.segmentCode,city:item.segmentName}}"></mt-cell>
 	
  
    </mt-search></form><iframe name='frameFile' style="display: none;"></iframe>
 </div> 
</template>
<style>
  .page-search {
    height: 100%;
  }
.mint-search-list
 {
 	margin-top: 80px;
 }

</style>


<script>

import axios from 'axios'
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
			searchResult(value)
			{
				this.result="";
				
				const url ='/getTicketSegmentLike';
				axios.get(url+'/'+value)
     			.then(response=>{
         		console.log(response);
         		this.result=response.data.data;
      			})
      		.catch(error=>{
          	console.log(error);
          	alert('网络错误，不能访问');
      			});
      		this.show=false;
			}


		},
		computed:
		{
			


		}
	}
</script>