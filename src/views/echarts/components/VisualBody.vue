<template>
  <div class="VisualBody">
    <div class="VisualBody-left">
      <echarts-card v-for="(item,index) in titleList" :key="index" v-show="index<3">
        <template slot="title">{{item.title}}</template>
        <template slot='echartView'><visual-echarts v-if="index<3" :echartsType='item.type' /></template>
      </echarts-card>
    </div>
    <div class="VisualBody-center">
      <visual-title :marketStatistics="marketStatistics"></visual-title>
      <visual-map></visual-map>
    </div>
    <div class="VisualBody-right">
      <echarts-card v-for="(item,index) in titleList" :key="index" v-show="index>=3">
        <template slot="title" class="EchartsCard-title">{{item.title}}</template>
        <template slot='echartView'><visual-echarts v-if="index>=3" :echartsType='item.type' /></template>
      </echarts-card>
    </div>
  </div>
</template>

<script>
import EchartsCard from '@/components/EchartsCard'
import VisualTitle from './VisualTitle'
import VisualEcharts from './VisualEcharts'
import VisualMap from './VisualMap'
import { titleList, marketStatistics } from '../datas/data'

export default {
  components: {
    EchartsCard, VisualTitle, VisualMap, VisualEcharts
  },
  data () {
    return {
      marketStatistics: [],
      status: ['同步中', '已同步', '已完成']
    }
  },
  created () {
    this.getData()
  },
  mounted () {

  },
  methods: {
    getData () {
      this.imitatePromise().then(res => {
        this.marketStatistics = res
      })
    },
    imitatePromise () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(marketStatistics)
        }, 500)
      })
    }
  },
  computed: {
    titleList () {
      return titleList
    }

  }
}
</script>

<style scoped lang='scss'>
.VisualBody{
  padding:10px;
  box-sizing: border-box;
  display: flex;
  &-left,&-right{
    flex:2.5;
  }
  &-center{
    flex: 5;
  }
}

</style>
