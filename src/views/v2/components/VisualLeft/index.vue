<template>
  <div class="left">
    <div v-for="(item, index) in comEnum" :key="index" class="left-wrapper">
      <echarts-card-bg :height="item.height" > </echarts-card-bg>
      <div class="left-wrapper-content">
        <template>
          <component v-bind:is="item.view" v-bind='item.data'></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CountView from './CountView.vue'
import MonitorEquipment from './MonitorEquipment.vue'
import EchatrsView from '@/components/v2/EchatrsView.vue'
import EchartsCardBg from '@/components/v2/EchartsCardBg.vue'
import { chinaSpecies } from '../../datas/data'
const comEnum = [
  { view: CountView },
  { view: MonitorEquipment, height: 490 },
  { view: EchatrsView, height: 340, data: chinaSpecies }
]
export default {
  components: { EchartsCardBg },
  data () {
    return {
      list: [{ name: 1 }]
    }
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
.left {
  @include v2-wrapper;
  flex: 3;
}
</style>
