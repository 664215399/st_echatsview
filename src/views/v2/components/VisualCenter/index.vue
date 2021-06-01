<template>
  <div class="center">
    <china-map></china-map>
    <div class="center-wrapper">
      <echarts-card-bg :height="340"> </echarts-card-bg>
      <div class="center-wrapper-content">
        <echatrs-view v-bind="ChinaUser"></echatrs-view>
      </div>
    </div>
  </div>
</template>

<script>
import ChinaMap from './ChinaMap.vue'
import EchartsCardBg from '@/components/v2/EchartsCardBg.vue'
import EchatrsView from '@/components/v2/EchatrsView.vue'
import { ChinaUser } from '../../datas/data'
export default {
  components: { ChinaMap, EchartsCardBg, EchatrsView },
  computed: {
    ChinaUser () {
      return ChinaUser
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/v2/mixins';
.center {
  flex: 4;
  padding:40px 20px 0px 20px;
  box-sizing: border-box;
  @include v2-wrapper;
}
</style>
