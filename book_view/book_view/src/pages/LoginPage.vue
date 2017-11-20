<template lang="html">
  <div>
    <label>输入用户名:</label>
    <input v-model="username" placeholder="用户名">
    <label>密码:</label>
    <input v-model="password" placeholder="密码">
    <button v-on:click=userLogin()>提交</button>
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
//          console.log(data.body.data)
          localStorage.setItem('token',data.body.data.token);
          localStorage.setItem('username',this.username);
          window.location.href="/index"
        }
      })
    }
  }

  }
</script>
