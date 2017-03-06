<template>
  <div class="index page">
    <v-head></v-head>
    <v-content></v-content>
  </div>
</template>

<script type="text/ecmascript-6">

import head from '../head/head'
import contentList from '../contentList/contentList'

export default{
  components: {
      'v-head': head,
      'v-content': contentList
  }
}
</script>

<style lang="less">

</style>
