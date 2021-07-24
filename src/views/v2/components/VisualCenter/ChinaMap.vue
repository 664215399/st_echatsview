<template>
  <div class="map">
    <div class="map-title">设备数据统计</div>
    <div class="map-content" ref="map" style="height: 520px;width:100%;"> </div>
  </div>
</template>

<script>
import { mixin } from '../../datas/mixin.js' // 引入minixn
export default {
  mixins: [mixin],
  components: {},
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
.map {
  height: 580px;
  margin-bottom: 20px;
  &-title {
    line-height: 60px;
    font-size: 20px;
    color:#fff;
  }
  &-content {
    // height: 520px;
    background-color: rgba(255, 255, 255, 0.05);
    margin-bottom: 20px;
  }
}
</style>
