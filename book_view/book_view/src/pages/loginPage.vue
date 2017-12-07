<template lang="html">
  <div>
    <div>
    <div>
    <div class="box">
             <label>输入用户名:</label>
    <input v-model="username" placeholder="用户名">
</div>
    <div class="box">
    <label>密码:</label>
    <input v-model="password" placeholder="密码">
    </div>
    <div  class="box">
    <button v-on:click=userLogin()>登录</button>
    <button  style="margin-left: 10px" v-on:click=userRegister()>注册</button>
    <button  style="margin-left: 10px" v-on:click=findBackPassword()>忘记密码</button>
</div>

</div>
</div>


</div>

</template>
<script>
  export default {
    data(){
      return{
        username:'',
        password:'',
      }
    },
    methods:{
      userLogin:function (event) {
      this.$http.post('http://localhost:3000/users/login',{username: this.username,password:this.password}).then((data) => {
        if(data.body.status==1){
          alert(data.body.message)
        }else{
          let save_token={
            token:data.body.data.token,
            username: this.username,
          }
//          console.log(data.body.data.user[0])
          localStorage.setItem('token',data.body.data.token);
          localStorage.setItem('username',data.body.data.user[0].username);
          localStorage.setItem('_id',data.body.data.user[0]._id);
//          localStorage.setItem('username',this.username);
          this.$router.go(-1)
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
