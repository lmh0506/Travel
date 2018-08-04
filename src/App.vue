<template>
  <div id="app">
    <!-- 不缓存detail页面的数据 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
