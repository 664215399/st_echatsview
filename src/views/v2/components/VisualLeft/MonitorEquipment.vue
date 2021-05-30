<template>
  <div class="monitor">
    <div class="monitor-wrapper">
      <ul class="monitor-wrapper-type">
        <li v-for="(value, i) in typeList" :key="i" :class="activeIndex === i ? 'active' : ''" @click="activeIndex=i">
          {{ value.title }}
        </li>
      </ul>
      <ul class="monitor-wrapper-title">
        <li>异常时间</li>
        <li>设备地址</li>
        <li>异常代码</li>
      </ul>
      <vue-seamless-scroll :data="monitorList.list" class="seamless">
        <ul v-for="(item, index) in monitorList.list" :key="index" class="monitor-wrapper-list">
          <li>{{ momentFilter(item.time)}}</li>
          <li>{{ item.address }}</li>
          <li>{{ item.code }}</li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import { monitor, typeList } from '../../datas/data'
import moment from 'moment'
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    typeList () {
      return typeList
    },
    monitorList () {
      const arr = monitor.filter((val) => {
        return this.activeIndex === val.type
      })
      return arr[0]
    }
  },
  methods: {
    momentFilter (val) {
      return moment(val).format('YYYY-MM-DD')
    }
  }
}
</script>
<style lang='scss' scoped>
.monitor {
  color: #fff;
  padding: 20px 0px;
  box-sizing: border-box;
  .seamless {
    height:350px;
    overflow: hidden;
  }
  &-wrapper {
    &-type {
      font-size: 20px;
      margin-bottom: 20px;
      line-height: 24px;
      position: relative;
      cursor: pointer;
      .active {
        color: #0068ff;
      }
    }
    &-title {
      background-color: rgba(255, 255, 255, 0.1);
      color: #68d8fe;
      font-size: 16px;
      line-height: 38px;
    }
    &-list{
      font-size: 14px;
      &:hover{
           background-color: rgba(255, 255, 255, 0.1);
           color:#0068ff;
        }
      li{
        height:40px;
        line-height:40px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0px 40px;
    }
  }
}
</style>
