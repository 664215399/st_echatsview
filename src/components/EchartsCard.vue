<template>
  <div class="EchartsCard">
    <div class="EchartsCard-title">
      <slot name="title"></slot>
    </div>
    <div class="EchartsCard-chart"></div>
    <!-- 占位 -->
    <div class="EchartsCard-bottom"></div>
    <!-- 占位 -->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/scss/mixins';
.EchartsCard{
    position: relative;
    width:100%;
    height:310px;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: url('../assets/images/line.png');
    padding:0px 15px 40px;
    margin-bottom: 15px;
    box-sizing: border-box;
    @include top-turn;
    &-title{
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    color:#fff;
    }
    &-chart{
        width:100%;
        height:240px;
        background:#0068ff;
    }
    &-bottom{
      position: absolute;
      left: 0;
      bottom: 0;
      width:100%;
     @include bottom-turn
    }
}

</style>
