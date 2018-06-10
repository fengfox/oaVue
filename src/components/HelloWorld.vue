<template>  
  <div>  
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">  
          <router-link to="/" slot="left">  
            <mt-button icon="back" @click="handleClose">返回</mt-button>  
          </router-link>  
          <mt-button icon="more" slot="right" @click="more"></mt-button>  
        </mt-header>  
          
  </div>  
</template>  

<script>
export default {  
  name: 'app',  
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
    more: function(){  
        console.log("更多")  
    }  
  }  
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
