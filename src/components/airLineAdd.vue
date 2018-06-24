<template>
	<div>
	<div>
		<mt-header title="航线增加">
			<router-link to='' slot="left">
				<mt-button icon="back" @click="$router.back(-1)" >返回</mt-button>

			</router-link>
			
			
		</mt-header>
	</div>
	  <div class="center">
	  <!--写content-->
	  <div>

	  	<mt-cell><input type="text" v-model="from"  slot="title" placeholder="出发地"/></mt-cell>
	  	<mt-cell><input type="text" v-model ="fromCode" slot="title" placeholder="出发地三字码"/></mt-cell>
	  	<mt-cell><input type="text" v-model ="to" slot="title" placeholder="目的地"/></mt-cell>
	  	<mt-cell><input type="text" v-model ="toCode" slot="title" placeholder="目的地三字码"/></mt-cell>

	  	<mt-button size="large" type="primary" @click="addSegment()">确认</mt-button>
	  </div>
  </div>
</div>
</template>
<style>
input{
	border:none;
	width:100%;
}
</style>


<script>

	export default{
		data(){
			return{
				to:'',
				toCode:'',
				from:'',
				fromCode:'',
				
			};
		},
		methods:
		{
			addSegment()
			{
				console.log("添加事件");
				const url ='/ticketSegmentAdd';
				var params = new URLSearchParams();
				params.append('from',this.from);
				params.append('fromCode',this.fromCode);
				params.append('to',this.to);
				params.append('toCode',this.toCode);
				this.$axios({
    				method: 'post',
   					url:url,
    				data:params
					}).then((response)=>{
						if(response.data.code==0)
						{
								alert("添加成功");
						}
						else
						{
							alert("添加失败");
						}
					});
			}
		}
	}
</script>