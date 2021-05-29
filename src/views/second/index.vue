<template>
  <div class='Visual'>
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
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/common.scss';
.Visual{
  background:url('../../assets/images/bgv2.jpg') no-repeat center center/cover;
  &-wrapper{
    width:100%;
    height:100%;
    background:url('../../assets/images/logov2.png') no-repeat 0 0/contain;
    padding:100px 40px 20px 40px;
    box-sizing: border-box;
    display: flex;

  }
}
</style>
