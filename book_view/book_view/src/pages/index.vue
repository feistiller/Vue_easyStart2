<template lang="html">
<!--此页面需要-->
  <div class="container">
  <div>
      <movie-index-header ></movie-index-header>   <!--  展示引入的header组件 -->
  </div>
  <div class="contentPic">
      <index-header-pic v-for="item in headerItems" :key="item._id"  :recommendImg="item.recommendImg" :recommendSrc="item.recommendSrc" :recommendTitle="item.recommendTitle"></index-header-pic>
  </div>
  <div class="contentMain">
    <div>
      <div class="contentLeft">
          <ul class="cont-ul">
            <movies-list v-for="item in movieItems" :key="item._id" :id="item._id" :movieName="item.movieName" :movieTime="item.movieTime"></movies-list><!--引入MovieList-->
          </ul>
      </div>
</div>
  <div>
      <div class="contentRight">
          <ul class="cont-ul">
            <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
            <news-list v-for="item in newsItems" :key="item._id" :id="item._id"  :articleTitle="item.articleTitle" :articleTime="item.articleTime"></news-list>
          </ul>
      </div>
  </div>
</div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/commonFooter'
import NewsList from '../components/NewsList'
import MoviesList from '../components/MoviesList'
import IndexHeaderPic from '../components/IndexHeaderPic'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [],
      headerItems:[],
      newsItems:[],
      movieItems:[]
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    NewsList,
    MoviesList,
    IndexHeaderPic
  },

//  这里用于获取数据，需要获得主页推荐，主页新闻列表，主页电影列表
  created () {
    this.$http.get('http://localhost:3000/showIndex').then((data) => {
      this.headerItems = data.body.data;
      console.log( data.body.data)
    })
//    获取新闻
    this.$http.get('http://localhost:3000/showArticle').then((data) => {
      this.newsItems = data.body.data;
      console.log(data.body)
    })
//    获取所有电影
    this.$http.get('http://localhost:3000/movie/list').then((data) => {
      this.movieItems = data.body.data;
      console.log( data.body)
    })
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
  .contentMain{
    height: 50px;
  }
  .contentPic{
    padding-top:60px;
  }
  .contentLeft{
    width: 60%;
    float: left;
    margin-top: 5px;
    border-top: 1px solid #000;
  }
  .contentRight{
    width: 38%;
    margin-left:1% ;
    float: left;
    margin-top: 5px;
    border-top: 1px solid #000;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #fff;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
