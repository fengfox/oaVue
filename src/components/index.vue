<template>  
<div>
  <div>  
        <mt-header title="OA管理">  
          <router-link to="" slot="left">  
            <mt-button  icon="back" @click="$router.back(-1)">返回</mt-button>  
          </router-link>
		
		  
        </mt-header>  
          
  </div>  
  <div>
    <div class="part">
	  <mt-cell title="公务机票"  is-link :to="{name: 'Ticket'}"></mt-cell>
	  <mt-cell title="公文管理"  is-link :to="{}"></mt-cell>
    </div>
  </div>
  </div>
</template>  

<script>
export default {  
  name: 'index',  
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
