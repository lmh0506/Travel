<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="(img, index) in imgs" :key="index">
          <img class="gallary-img" :src="img" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 父级元素或当前元素发生变化时 swiper自动更新
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    overflow: visible;
  }

  .container{
    position: fixed;
    flex-direction: column;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper{
      width: 100%;

      .gallary-img{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
