<template>
  <div class="right">
    <div v-for="(item, index) in comEnum" :key="index" class="right-wrapper">
      <echarts-card-bg :height="item.height" > </echarts-card-bg>
      <!-- <div v-else :style="{height:item.height+'px'}"></div> -->
      <div class="right-wrapper-content">
        <template>
          <component v-bind:is="item.view" v-bind="item.data"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import OrderView from './OrderView.vue'
import SellView from './SellView.vue'
import EchartsCardBg from '@/components/v2/EchartsCardBg.vue'
import EchatrsView from '@/components/v2/EchatrsView.vue'
import { worldcloud, paopao } from '../../datas/data'
const comEnum = [
  { view: OrderView, height: 150 },
  { view: EchatrsView, height: 235, data: worldcloud },
  { view: SellView, height: 250 },
  { view: EchatrsView, height: 285, data: paopao }
]
export default {
  components: { EchartsCardBg },
  data () {
    return {}
  },
  computed: {
    comEnum () {
      return comEnum
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/v2/mixins';
.right {
  @include v2-wrapper;
  flex: 3;
}
</style>
