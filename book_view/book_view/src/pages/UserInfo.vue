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
        this.detail = data.body.data;
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
