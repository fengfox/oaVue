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

	  	<mt-cell><input type="text" name="from" slot="title" placeholder="出发地"/></mt-cell>
	  	<mt-cell><input type="text" name ="fromCode" slot="title" placeholder="出发地三字码"/></mt-cell>
	  	<mt-cell><input type="text" name ="to" slot="title" placeholder="目的地"/></mt-cell>
	  	<mt-cell><input type="text" name ="toCode" slot="title" placeholder="目的地三字码"/></mt-cell>

	  	<mt-button size="large" type="primary">确认</mt-button>
	  </div>
  </div>
</div>
</template>
<style>
input{
	border:none;
	width:50%;
}
</style>


<script>

	export default{
		data(){
			return{
				
			};
		}
	}
</script>