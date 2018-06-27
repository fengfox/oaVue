<template>  
<div class="login">
  <div class="page-title">登录</div>
  <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
  <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
  <div class="submit">
  <mt-button size="large" type="primary">确认</mt-button>
  </div>
  </div>

</template>  

<script>
export default {  
  
} 
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login
{
  padding: 10%;
}
.submit
{
  margin-top: 20px;
}
.page-title
{
  font-size:32px;
  text-align: center;
  margin-bottom: 5%;
  
}



</style>
