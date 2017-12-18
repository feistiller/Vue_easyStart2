<template lang="html">
<!--此页面需要-->
  <div class="container">
    <div>
      <movie-index-header ></movie-index-header>   <!--  展示引入的header组件 -->
    </div>
    <div class="contentMain">
      <div class="">
        <h1>{{detail.movieName}}</h1>
        <div class="viewNum">下载次数：{{detail.movieNumDownload}}</div>
      </div>
      <div class="">
      <button v-on:click=movieDownload()>点击下载</button>
      </div>
      <div>
        <img class="headerImg" v-bind:src=detail.movieImg>
      </div>
       <div v-on:click="support()" class="btnPosition">
        <div class="SupportBtn">点赞<div>{{detail.movieNumSuppose}}</div></div>
       </div>
    </div>
    <div>
    <comment v-bind:movie_id="movie_id"></comment>
</div>
    <div>
      <common-footer></common-footer>  <!--  展示引入的footer组件 -->
    </div>
  </div>
</template>
<script>
import MovieIndexHeader from '../components/MovieIndexHeader'

let movie_id=0
export default {
  name: 'MovieDetail',
  data () {
    return {
      detail: [],
      movie_id:'',
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    Comment,
  },

//  这里用于获取数据，需要获得主页推荐，主页新闻列表，主页电影列表
  created () {

  },
  methods:{

  }
}
</script>

<style lang="css" scoped>
  .headerImg{
    height: 200px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
    padding-top: 150px;
  }

  .btnPosition{
    padding-left: 48%;
  }
  .SupportBtn{
    border: solid 1px #000;
    width: 60px;
  }
  .viewNum{
    font-size: 10px;
  }
</style>
