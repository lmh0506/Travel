<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
      <span class="iconfont icon-back"></span>
    </router-link>
    <router-link
      v-show="!showAbs"
      tag="div"
      to="/"
      :style="opacityStyle"
      class="header-fixed">
      <span class="iconfont icon-back"></span>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/varibles.scss';

  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: $headerHeight;
    height: $headerHeight;
    border-radius: 50%;
    background: rgba(0, 0, 0, .8);
    text-align: center;
    line-height: $headerHeight;
    color: #fff;
  }

  .header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;

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
