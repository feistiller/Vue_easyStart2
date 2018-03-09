<template>
  <div>
    <label>直接输出的模式：</label>
    <div>{{msg}}</div>
    <label>解析后输出的模式：</label>
    <div v-html="rawHtml">{{msg}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '<div style="font-size: 20px">helloWorld</div>>'
    }
  }
}
</script>
