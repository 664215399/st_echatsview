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
@import '@/assets/scss/common.scss';
.Visual {
  background: url('../../assets/images/bgv2.jpg') no-repeat center center/cover;
  &-header {
    line-height: 80px;
    height: 80px;
    background: url('../../assets/images/logov2.png') no-repeat center center / cover;
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
