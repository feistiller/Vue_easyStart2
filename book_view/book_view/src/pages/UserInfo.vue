<template lang="html">
<!--此页面需要-->
  <div class="container">
  <div>
      <movie-index-header ></movie-index-header>   <!--  展示引入的header组件 -->
  </div>
  <div class="userMessage">
    <user-message></user-message>
  </div>
<!--用户的相关信息-->
<div>
  <div class="box">用户名：{{detail.username}}</div>
</div>
<div>
  <div class="box">用户邮箱：{{detail.userMail}}</div>
</div>
<div>
  <div class="box">用户电话：{{detail.userPhone}}</div>
</div>
<div>
  <div class="box">用户状态：{{userStatus}}</div>
</div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/commonFooter'
import UserMessage from '../components/UserMessage'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [],
      detail:[],
      userStatus:''
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    UserMessage
  },

//  这里用于获取数据，需要获得主页推荐，主页新闻列表，主页电影列表
  created () {
    let userId=this.$route.query.id
    if(userId){
      this.$http.post('http://localhost:3000/showUser',{user_id: userId}).then((data) => {
        if( data.body.status==1){
          alert(data.body.message)
        }else{
          this.detail = data.body.data;
          if(data.body.data.userStop){
            this.userStatus="用户已经被封停"
          }else{
            this.userStatus="用户状态正常"
          }
        }
      console.log( data.body.data)
      })
    }else{
      alert("用户信息错误")
    }
  },
  ready(){

  }
}
</script>

<style lang="css" scoped>
  .box{
    display: inline-flex;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .userMessage{
    padding-top:60px;
    margin-top:-10px;
    margin-left: -10px;
  }
</style>
