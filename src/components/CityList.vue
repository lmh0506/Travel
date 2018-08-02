<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleChangeCity(hot.name)" v-for="hot in hotCities" :key="hot.id">
            <div class="button">{{hot.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom" >{{key}}</div>
        <div class="item-list" >
          <div class="item border-bottom" @click="handleChangeCity(city.name)" v-for="city in item" :key="city.id">
            {{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    },
    letter: {
      type: String
    }
  },
  computed: {
    ...mapState([
      'city'
    ])
  },
  methods: {
    ...mapMutations([
      'setCity'
    ]),
    handleChangeCity (city) {
      this.setCity(city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "styles/varibles.scss";
  .border-topbottom{
    &::before{
      border-color: #ccc;
    }
    &::after{
      border-color: #ccc;
    }
  }

  .border-bottom{
    &::before{
      border-color: #ccc;
    }
  }

  .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title{
      line-height: .54rem;
      background: #eee;
      color: #666;
      padding-left: .2rem;
      font-size: .26rem;

    }

    .button-list{
      padding: .1rem .6rem .1rem .1rem;
      display: flex;
      flex-wrap: wrap;

      .button-wrapper{
        width: 33.33%;

        .button{
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }

    .item-list{
      .item{
        line-height: .76rem;
        padding-left: .2rem;
      }

    }
  }

</style>
