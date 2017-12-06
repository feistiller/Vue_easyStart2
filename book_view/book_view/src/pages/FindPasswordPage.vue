<template lang="html">
  <div>
    <div>
    <div v-bind:style="{display:!showRePassword}">
    <div class="box">
             <label>输入用户名:</label>
    <input v-model="username" placeholder="用户名">
</div>
    <div class="box">
    <label>输入邮箱:</label>
    <input v-model="userMail" placeholder="邮箱">
    </div>
    <div class="box">
    <label>输入手机:</label>
    <input v-model="userPhone" placeholder="手机">
    </div>

    <div  class="box">
    <button v-on:click=checkUser()>找回密码</button>
</div>


</div>
<div v-bind:style="{display:showRePassword}">
    <div class="box" >
    <label>输入新密码:</label>
    <input v-model="repassword" placeholder="输入新密码">
    </div>
     <div  class="box">
    <button v-on:click=checkUser()>修改密码</button>
</div>
</div>
</div>


</div>

</template>
<script>
  export default {
    data(){
      return{
        userMail:'',
        userPhone:'',
        username:'',
        repassword:'',
        showRePassword:'none'
      }
    },
    methods:{
      checkUser:function (event) {
      this.$http.post('http://localhost:3000/users/findPassword',{username: this.username,userMail:this.userMail,userPhone:this.userPhone}).then((data) => {
        if(data.body.status==1){
          alert(data.body.message)
        }else{

        }
      })
    },
//      注册跳转页面
      userRegister:function (event) {
        this.$router.push({path:'register'})
      },
//      找回密码
      findBackPassword:function (event) {
        this.$router.push({path:'findPassword'})
      }
  }

  }
</script>
<style>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
</style>
