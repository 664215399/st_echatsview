<template>
  <div class="Visual">
    <div class="Visual-header">
      <h1>可视化面板--V2</h1>
      </div>
    <div class="Visual-wrapper">
      <visual-left></visual-left>
      <visual-center></visual-center>
      <visual-right></visual-right>
    </div>
  </div>
</template>

<script>
import VisualLeft from './components/VisualLeft/index'
import VisualRight from './components/VisualRight/index'
import VisualCenter from './components/VisualCenter/index'
export default {
  components: { VisualLeft, VisualRight, VisualCenter },
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/mixins.scss';
.Visual {
  @include bg-image('../../assets/images/v2/bgv2.jpg');
  &-header {
    line-height: 80px;
    height: 80px;
    @include bg-image('../../assets/images/v2/logov2.png');
    h1{
      text-align: center;
      font-size: 36px;
    }
  }
  &-wrapper {
    width: 100%;
    height: 100%;
    padding: 0px 40px 0px 40px;
    box-sizing: border-box;
    display: flex;
  }
}
</style>
