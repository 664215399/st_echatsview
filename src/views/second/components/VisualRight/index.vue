<template>
  <div class="right">
    <div v-for="(item, index) in comEnum" :key="index" class="right-wrapper">
      <echarts-card-bg :height="item.height" v-if="index!==2"> </echarts-card-bg>
      <div v-else :style="{height:item.height+'px'}"></div>
      <div class="right-wrapper-content">
        <template>
          <component v-bind:is="item.view"></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelView from './ChannelView.vue'
import OrderView from './OrderView.vue'
import BestSelling from './BestSelling.vue'
import SellView from './SellView.vue'
import EchartsCardBg from '@/components/second/EchartsCardBg.vue'
const comEnum = [
  { view: OrderView, height: 150 },
  { view: ChannelView, height: 235 },
  { view: SellView, height: 250 },
  { view: BestSelling, height: 285 }
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
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/v2/mixins';
.right {
  @include v2-wrapper;
  flex: 3;
}
</style>
