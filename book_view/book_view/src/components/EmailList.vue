<template lang="html">
 <div>
    {{title}}
</div>
<div>
    {{fromUser}}
</div>
<div>
    {{context}}
</div>
</template>
<script>
export default {
  props:['title', 'fromUser','context']
}
</script>
<style lang="css" scoped>
</style>
