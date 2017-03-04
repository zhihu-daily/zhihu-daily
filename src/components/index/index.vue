<template>
  <div class="index">
    <div class="menu">
      我是左侧菜单
    </div>
    <div class="content">
      <v-head></v-head>
      <v-content></v-content>
    </div>
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
  .index{
    height: 100vh;
    display: flex;
    .menu{
      margin-left: -220px;
      background: #111122;
      flex: 0 0 220px;
    }
    .content{
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  }
</style>
