<template>
  <div id="app">
    <transition name="opening">
      <div class="menu" v-if="opening">
        我是左侧菜单
      </div>
    </transition>
    <index></index>
    <span @click = 'openMenu'>btn</span>
  </div>
</template>

<script>
import index from '@/components/index/index'

export default {
  data: function () {
    return {
      opening: false
    }
  },
  name: 'app',
  components: {
    index
  },
  methods: {
    openMenu: function () {
      this.opening = !this.opening
    }
  }
}
</script>

<style lang="less">
  #app{
    display: flex;
    .menu{
      background: #111122;
      flex: 0 0 220px;
    }
    .page{
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
    .opening{
      margin-left: 0;
    }
    .opening-enter-active{
      transition: margin-left .5s
    }
    .opening-leave-active{
      margin-left: -220px;
      transition: margin-left .5s
    }
    .opening-enter{
      margin-left: -220px;
    }
    .opening-leave{
      margin-left: 0px;
    }
  }
</style>
