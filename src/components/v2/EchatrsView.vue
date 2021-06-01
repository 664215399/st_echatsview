<template>
  <div class="EchartsView">
    <h3 class="EchartsView-title">{{ data.title }}</h3>
    <div :class="[data['position']==='bottom'?'EchartsView-column':'EchartsView-view']">
      <div class="EchartsView-view-left"
           :ref="data.dom"></div>
      <div class="EchartsView-view-right"
           v-if="data.tooltip">
        <echarts-card-tooltip v-bind="data"></echarts-card-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

import EchartsCardTooltip from '@/components/v2/EchartsCardTooltip.vue'
export default {
  components: { EchartsCardTooltip },
  mounted () {
    this.echartsInit()
  },
  computed: {
    data ({ $attrs, $route, $store, $listens, $ref }) {
      return $attrs
    }
  },
  methods: {
    echartsInit () {
      const myChart = echarts.init(this.$refs[this.data.dom])
      myChart.setOption(this.data.option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.EchartsView {
  padding: 20px 40px;
  height: 100%;
  box-sizing: border-box;
  &-title {
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  &-column {
    flex-direction: column;
    height: 100%;
    .EchartsView-view-left,
    .EchartsView-view-right {
      flex: 5;
      padding:0px;
      height:50%;
      background:none;
    }
  }
  &-view {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    &-left {
      flex: 8;
    }
    &-right {
      flex: 2;
      background: url('../../assets/images/rectv2.png') no-repeat center center/cover;
      padding: 40px 30px;
      box-sizing: border-box;
    }
  }
}
</style>
