<template>
  <div class="recommend-wrapper">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="`/detail/${item.id}`"
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'styles/mixins.scss';

  .recommend-title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    margin-top: .2rem;
  }

  .item{
    display: flex;
    overflow: hidden;
    height: 1.9rem;

    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }

    .item-info{
      flex: 1;
      min-width: 0;
      padding: .1rem;

      .item-title{
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis()
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
        @include ellipsis()
      }
      .item-button{
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: .06rem;
        margin-top: .16rem;
        line-height: .44rem;
        color: #fff;
      }
    }
  }
</style>
