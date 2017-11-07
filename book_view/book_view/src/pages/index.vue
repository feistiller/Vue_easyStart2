<template lang="html">
  <div class="container">
    <movie-index-header></movie-index-header>   <!--  展示引入的header组件 -->
    <div class="content">
      <ul class="cont-ul">
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
        <news-list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></news-list>
      </ul>
    </div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/commonFooter'
import NewsList from '../components/NewsList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    NewsList
  },
  created () {
    this.$http.get('/api/goods').then((data) => {
      this.items = data.body.data;
    })
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
