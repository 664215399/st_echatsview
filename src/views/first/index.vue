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
  },
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
.Visual{
    min-width:1260px;
    width:100%;
    height:100%;
    background:url('../../assets/images/bg.jpg') no-repeat center center/cover;
}
</style>
