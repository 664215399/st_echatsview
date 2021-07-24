<template>
  <div class="card" :style="{ height: height + 'px' }">
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 110
    }
  }
}
</script>
<style lang='scss' scoped>
  .card {
    width: 100%;
    border: 20px solid transparent;
    border-width: 63px 47px 25px 165px;
    border-image-source: url('../../assets/images/v2/borderv2.png');
    border-image-slice: 63 47 25 165;
    box-sizing: border-box;
    position: relative;
  }
</style>
