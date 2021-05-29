<template>
  <div class="wrapper">
      <ul class="cont-wrapper">
        <li v-for="(item, index) in equipmentNum" :key="index">
          <h3 class="cont-wrapper-count"><count-to :startVal='item.count/2' :endVal='item.count'>{{ item.count }}</count-to></h3>
          <p class="cont-wrapper-label">{{ item.label }}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import { equipmentNum } from '../../datas/data'
import CountTo from 'vue-count-to'
export default {

  components: { CountTo },
  data () {
    return {
      equipmentNum: []
    }
  },
  created () {
    this.getEquipment()
  },
  methods: {
    getEquipment () {
      this.equipmentInit().then((res) => {
        this.equipmentNum = res
      })
    },
    equipmentInit () {
      return new Promise((resolve, reject) => {
        resolve(equipmentNum)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.cont-wrapper {
    text-align: center;
    width:100%;
    height:100%;
    display: flex;
    padding:20px;
    box-sizing: border-box;
    &-count {
      font-size: 26px;
      line-height: 40px;
      color: #fff;
      font-weight: 500;
    }
    &-label {
      font-size: 16px;
      color: #0068ff;
    }
    display: flex;
    li {
      flex: 1;
    }
  }
</style>
