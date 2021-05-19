<template>
    <div class='VisualMap'>
        <div class="VisualMap-mapOne"></div>
        <div class="VisualMap-mapTwo VisualMap-mapC"></div>
        <div class="VisualMap-mapThree VisualMap-mapC"></div>
        <div class="VisualMap-chart" id="mapChina"></div>
    </div>
</template>

<script>
import { mixin } from '../datas/mixin.js' // 引入minixn
export default {
  mixins: [mixin],
  components: {},
  data () {
    return {
    }
  },
  computed: {

  },
  watch: {},
  created () {
  },

  methods: {

  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/animation.scss';
.VisualMap{
    width:100%;
    height:810px;
    padding:0px 15px;
    box-sizing: border-box;
    position: relative;
    &-mapOne{
      width:518px;
      height:518px;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      background:url('../../../assets/images/map.png') no-repeat center center/100% 100%;
      opacity: 0.3;
}
    &-mapC{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  &-mapTwo {
    width: 634px;
    height: 634px;
    background-image: url('../../../assets/images/lbx.png');
    opacity: 0.3;
    animation: rotate-clockwise 15s linear infinite;
    z-index: 2;
  }
  &-mapThree {
    width:566px;
    height:566px;
    background-image: url('../../../assets/images/jt.png');
    animation: rotate-anticlockwise 10s linear infinite;
    opacity: 0.6;
  }
  &-chart{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 810px;
    z-index: 10;
  }
}
</style>
