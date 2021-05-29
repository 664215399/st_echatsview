<template>
  <div class="Visual">
    <visual-header />
    <visual-body />
  </div>
</template>

<script>
// 引入组件
import VisualHeader from './components/VisualHeader'
import VisualBody from './components/VisualBody'
export default {
  components: {
    VisualHeader,
    VisualBody
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/scss/common.scss';
.Visual{
  background:url('../../assets/images/bg.jpg') no-repeat center center/cover;
}
</style>
