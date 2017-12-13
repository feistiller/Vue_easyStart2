<template lang="html">
    <div v-if=!isLogin class="header">
       <router-link to="/loginPage">
        <div class="header_menu">登录</div>
      </router-link>
    </div>
    <div v-else class="header">
       <router-link :to="{path: '/userInfo', query:{ id: id }}">
        <div class="header_menu">已登录：{{username}}</div>
      </router-link>
    </div>
</template>.
<!--这里需要一开始对于session进行检测，如果存在session则直接显示登录，不存在则是跳转链接-->
<script>
export default {
  data(){
    return{
      isLogin:false,
      username:'',
    }
  },
  created(){
//    此时登录成功
    let token=localStorage.getItem('token')
//    console.log(token)
    if(token){
      this.isLogin=true
      this.username=localStorage.getItem('username')
      this.id=localStorage.getItem('_id')
    }else{
        console.log('用户获得登录失败');
//      this.localStorage.setItem(data.body.data);
    }
  }
}
</script>
<style lang="css" scoped>
.header{
  width: 103%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color:#C3BD5C;
}
  .header_menu{
    padding-right: 60px;
    padding-top: 10px;
    float: right;
    color:#fff;
    font-size:8px;
  }
</style>
