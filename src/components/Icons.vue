<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(sliders, index) in pages" :key="index">
        <div class="icon" v-for="icon in sliders" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'icons',
  props: {
    iconList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }

        pages[page].push(item)
      })

      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/varibles.scss';
  @import 'styles/mixins.scss';

  .icons-wrapper{
    overflow: hidden;
    width: 100%;
    .swiper-container{
      width: 100%;

      .icon{
        position: relative;
        width: 25%;
        padding-bottom: 25%;
        overflow: hidden;
        float: left;
        margin-top: .1rem;

        .icon-img{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: .44rem;
          box-sizing: border-box;
          padding: .1rem;

          .icon-img-content{
            display: block;
            margin: auto;
            height: 100%;
          }
        }

        .icon-desc{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: .44rem;
          line-height: .44rem;
          text-align: center;
          color: $darkTextColor;
          @include ellipsis()
        }
      }
    }
  }
</style>
