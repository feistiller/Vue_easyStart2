<template>
  <div>
    <input v-bind="msg"/>
    {{msg+1}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 0
    }
  }
}
</script>
