<template>
  <header class="header">
    城市选择
    <router-link tag="span" to="/" class="iconfont icon-back"></router-link>
  </header>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import "styles/varibles.scss";
  .header{
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    position: relative;

    .icon-back{
      position: absolute;
      left: 0;
      top: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
    }
  }
</style>
