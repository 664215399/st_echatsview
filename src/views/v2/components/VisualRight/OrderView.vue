<template>
  <div class='order'>
    <ul class="order-title">
      <li v-for="(val,index) in orderType" :key="index" :class="defaultIndex===index?'active':''" @click='defaultIndex = index'>{{val}}</li>
    </ul>
    <div class="order-container">
      <echarts-card-tooltip v-bind="data[defaultIndex]"></echarts-card-tooltip>
    </div>
  </div>
</template>

<script>
import EchartsCardTooltip from '@/components/v2/EchartsCardTooltip'

export default {
  components: { EchartsCardTooltip },
  data () {
    return {
      defaultIndex: 0,
      orderType: ['年', '季', '月', '日'],
      data: {
        0: { tooltip: [{ title: '订单量', count: '30000000' }, { title: '销售额(万)', count: '999999' }], position: 'bottom' },
        1: { tooltip: [{ title: '订单量', count: '10000000' }, { title: '销售额(万)', count: '333333' }], position: 'bottom' },
        2: { tooltip: [{ title: '订单量', count: '3333333' }, { title: '销售额(万)', count: '111111' }], position: 'bottom' },
        3: { tooltip: [{ title: '订单量', count: '1111111' }, { title: '销售额(万)', count: '33333' }], position: 'bottom' }

      }
    }
  },
  computed: {},
  watch: {},
  created () {

  },
  mounted () {

  }

}
</script>
<style lang='scss' scoped>
.order{
  padding:20px 40px;
  box-sizing: border-box;
  &-title{
    display: flex;
    margin-bottom: 10px;
    li{
      font-size: 14px;
      margin-right: 30px;
      line-height: 20px;
      padding:2px 5px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      background: rgba($color: #0068ff, $alpha: .5);
      &:not(:nth-last-of-type(1))::after{
        content: '';
        position: absolute;
        width:2px;
        height:80%;
        top:3px;
        right:-15px;
        background:#00f2f1;
      }
      &.active{
        background:#0068ff;
      }
    }
  }
}
</style>
