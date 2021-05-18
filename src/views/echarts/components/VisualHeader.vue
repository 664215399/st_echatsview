<template>
  <div class="VisualHeader">
    <h1 class="VisualHeader-title">可视化面板-Echarts</h1>
    <p class="VisualHeader-nowtime">{{nowTime}}</p>
  </div>
</template>

<script>
import { nowTime } from '../../../../utils/timeFilters'
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

  },
  computed: {
    nowTime () {
      return nowTime()
    }
  }
}
</script>

<style scoped lang='scss'>
.VisualHeader{
  position: relative;
  width:100%;
  height:100px;
  background:url('../../../assets/images/head_bg.png') no-repeat top center /100% 100% ;
  &-title{
    text-align: center;
    color: #fff;
    line-height:80px;
    font-size: 38px;
  }
  &-nowtime{
    position: absolute;
    right:30px;
    top:0;
    line-height: 75px;
    color:rgba(55, 255, 255, 0.7);
    font-size: 20px;
  }
}

</style>
