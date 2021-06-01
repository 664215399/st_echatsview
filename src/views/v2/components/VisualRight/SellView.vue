<template>
  <div class='SellView'>
    <div v-for="(item, index) in sellList"
         :key="index"
         class="SellView-wrapper">
      <echarts-card-bg :height="item.height"> </echarts-card-bg>
      <div class="SellView-wrapper-content">
        <template>
          <component v-bind:is="item.view"
                     v-bind='item.data'></component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import EchartsCardBg from '@/components/v2/EchartsCardBg.vue'
import EchatrsView from '@/components/v2/EchatrsView.vue'
import { quarter, sell } from '../../datas/data'
const sellList = [
  { view: EchatrsView, height: 250, data: sell },
  { view: EchatrsView, height: 250, data: quarter }
]
export default {
  components: { EchartsCardBg, EchatrsView },
  data () {
    return {

    }
  },
  computed: {
    sellList () {
      return sellList
    }
  },
  watch: {},
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/v2/mixins';
.SellView {
  display: flex;
  height: 250px;
  @include v2-wrapper;
  > div {
    flex: 1;
    &:nth-of-type(1) {
      margin-right: 20px;
    }
  }
}
</style>
