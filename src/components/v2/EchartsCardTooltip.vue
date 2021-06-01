<template>
  <div :class="['wrapper',$attrs.position==='bottom'?'flex':'']">
    <div :class="['wrapper-tooltip',$attrs.position==='bottom'?'flex-tooltip':'']"
         v-for="(item, index) in $attrs.tooltip"
         :key="index">
      <h2>{{ thousandBitSeparator(item.count) }}</h2>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { thousandBitSeparator } from '@/utils/index.js'

export default {
  methods: {
    thousandBitSeparator (num) {
      return thousandBitSeparator(num)
    }
  }
}
</script>
<style lang='scss' scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
.wrapper {
  &-tooltip:not(:nth-last-of-type(1)) {
    margin-bottom: 20px;
  }
  h2 {
    line-height: 40px;
    font-size: 30px;
    font-weight: normal;
  }
  p {
    line-height: 30px;
    font-size: 16px;
    color: #0068ff;
  }
}
</style>
