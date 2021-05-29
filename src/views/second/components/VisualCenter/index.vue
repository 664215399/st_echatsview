<template>
  <div class="center">
    <china-map></china-map>
    <div class="left-wrapper">
      <echarts-card-bg :height="340"> </echarts-card-bg>
      <div class="left-wrapper-content">
        <china-user></china-user>
      </div>
    </div>
  </div>
</template>

<script>
import ChinaMap from './ChinaMap.vue'
import ChinaUser from './ChinaUser.vue'
import EchartsCardBg from '@/components/second/EchartsCardBg.vue'
export default {
  components: { ChinaMap, ChinaUser, EchartsCardBg },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='scss' scoped>
.center {
  flex: 4;
  padding:40px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
