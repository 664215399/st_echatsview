<template>
  <div class="VisualBody">
    <div class="VisualBody-left">
      <echarts-card v-for="(item,index) in titleList" :key="index" v-show="index<3">
        <template slot="title">{{item.title}}</template>
      </echarts-card>
    </div>
    <div class="VisualBody-center"></div>
    <div class="VisualBody-right">
      <echarts-card v-for="(item,index) in titleList" :key="index" v-show="index>=3">
        <template slot="title" class="EchartsCard-title">{{item.title}}</template>
      </echarts-card>
    </div>
  </div>
</template>

<script>
import EchartsCard from '@/components/EchartsCard'
import { titleList } from '../datas/data'
export default {
  components: {
    EchartsCard
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
