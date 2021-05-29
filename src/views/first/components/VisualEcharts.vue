<template>
    <div class='VisualEcharts' :ref="echartsType"></div>
</template>

<script>
import echarts from 'echarts'
import * as options from '../datas/option'
export default {
  props: {
    echartsType: {
      type: String,
      defaul: ''
    }
  },
  components: {},
  data () {
    return {
    }
  },
  computed: {
    options () {
      return options
    }
  },
  mounted () {
    // console.log(this.$refs[this.echartsType])
    // console.log(this.echartsType)
    // console.log(this.options)
    this.echartsInit()
  },
  methods: {
    echartsInit () {
      const myChart = echarts.init(this.$refs[this.echartsType])
      myChart.setOption(this.options[this.echartsType])
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.VisualEcharts{
    width:100%;
    height:100%;
}
</style>
