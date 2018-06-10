<template>  
<div>
  <div>  
        <mt-header title="公务机票">  
          <router-link to= '' slot="left">  
            <mt-button  icon="back" @click="$router.back(-1)">返回</mt-button>  
          </router-link>
		
		  
        </mt-header>  
          
  </div>  
  <div>
    <div class="part">
	  <mt-cell title="航线管理"  is-link :to="{path:'airLine'}"></mt-cell>
	  
    </div>
  </div>
  </div>
</template>  

<script>
export default {  
  name: 'ticket',  
  data () {  
    return {  
          
    }  
  },  
  mounted:function(){  
      
  },  
  methods: {  
    handleClose: function(){  
        console.log("返回")  
    },  
 
  }  
} 
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
