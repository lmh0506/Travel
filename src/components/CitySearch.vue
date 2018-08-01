<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul v-if="list.length > 0">
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
      </ul>
      <div v-else class="search-item border-bottom">没有找到匹配的数据</div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword (oldVal, newVal) {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach(val => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
  @import "styles/varibles.scss";
  .search{
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;

    .search-input{
      box-sizing: border-box;
      height: .62rem;
      line-height: .62rem;
      padding: 0 .1rem;
      width: 100%;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }

  .search-content{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 10;

    .search-item{
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
    }
  }

</style>
