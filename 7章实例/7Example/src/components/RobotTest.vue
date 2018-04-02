<template>
  <div id="">
    <p>
      提问：
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        question: '',
        answer: '你还没有问人家问题呀~'
      }
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function () {
        this.answer = '等待发问~~'
        this.getAnswer()
      }
    },
    methods: {
      // 通过该方法可以访问到API，并且如果有返回的内容，即显示在界面上。
      getAnswer: function () {
        if (this.question.indexOf('？') !== -1) {
          this.answer = '思考中……'
          let that = this
          // 这个模式是使用vue-resource
//        that.$http.post('http://robottest.uneedzf.com/api/talk2Robot', {token: 'd0f775c4ee09cd4e740366c17adbe050', message: that.question})
//          .then(function (res) {
//            if (res.data.code === 0) {
//              that.answer = res.data.data
//            } else {
//              that.answer = res.data.message
//            }
//          })
//        使用axious进行请求
// 使用axios进行请求服务器的操作
          axios.post('http://robottest.uneedzf.com/api/talk2Robot', {
            token: 'd0f775c4ee09cd4e740366c17adbe050',
            message: that.question
          }).then(function (response) {
// 根据返回的情况回复用户不同的内容
            if (res.data.code === 0) {
              that.answer = res.data.data
            } else {
              that.answer = res.data.message
            }
          })
            .catch(function (error) {
              // 如果请求失败或者是发送其他的错误，获取并打印
              console.log(error);
            });

        } else {
          this.answer = '一个问题一般由一个？结尾哦 ' +
            '♪(^∇^*)'
          return 0
        }
      }
    }
  }
</script>
