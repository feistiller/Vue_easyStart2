<template lang="html">
<!--此页面需要-->
  <div class="container">
  <div>
      <movie-index-header v-for="headerItem in headerItems" :imgSrc="headerItems.img"></movie-index-header>   <!--  展示引入的header组件 -->
  </div>
  <div class="contentPic">
      <index-header-pic></index-header-pic>
  </div>
  <div>
      <div class="contentLeft">
          <ul class="cont-ul">
            <movies-list></movies-list><!--引入MovieList-->
          </ul>
      </div>
</div>
  <div>
      <div class="contentRight">
          <ul class="cont-ul">
            <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
            <news-list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></news-list>
          </ul>
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
      headerItems:[]
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
//      console.log(data)
      this.headerItems = data.body.data.data;
      console.log( data.body)
    })
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
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
  .content {
    margin-bottom: 1.8rem;
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
