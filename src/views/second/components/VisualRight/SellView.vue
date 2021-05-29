<template>
<div class='SellView'>
  <echarts-card-bg :height='250'></echarts-card-bg>
  <echarts-card-bg :height='250'></echarts-card-bg>
</div>
</template>

<script>
import EchartsCardBg from '@/components/second/EchartsCardBg.vue'

export default {
  components: { EchartsCardBg },
  data () {
    return {

    }
  },
  computed: {},
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
.SellView{
  display: flex;
  height:250px;
  >div{
    flex: 1;
    &:nth-of-type(1){
      margin-right: 20px;
    }
  }
}
</style>
