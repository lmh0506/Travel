<template>
  <header class="header">
    <div class="header-left">
      <span class="iconfont icon-back"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont icon-jiantou"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styles/varibles.scss";

  .header{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: .86rem;
    background: $bgColor;
    color: #fff;

    .header-left{
      width: .64rem;
      text-align: center;
      .icon-back{
        font-size: .4rem;
      }
    }
    .header-input{
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      color: #ccc;
      margin-left: .2rem;
      padding-left: .2rem;
      background-color: #fff;
      border-radius: .1rem;
    }
    .header-right{
      width: 1.24rem;
      text-align: center;

      .icon-jiantou{
        font-size: .2rem;
      }
    }
  }
</style>
