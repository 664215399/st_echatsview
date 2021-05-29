<template>
<div class='wrapper'>
    <div class="wrapper">
        <div class="wrapper-pie" ref="pie"></div>
         <ul class="wrapper-pie-lable">
            <li v-for="(item,index) in data" :key='index' @click="labelClick(item)" :class="!item.flag?'active':''">
                {{item.name}}
                <span></span>
            </li>
        </ul>
    </div>

</div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {},
  data () {
    return {
      data: []

    }
  },
  computed: {

  },
  watch: {},
  created () {
    this.getData()
  },

  mounted () {

  },
  methods: {
    newP () {
      return new Promise(resolve => {
        resolve([
          { value: 3351, name: '直接访问', id: 1, flag: false },
          { value: 310, name: '邮件营销', id: 2, flag: false },
          { value: 234, name: '联盟广告', id: 13, flag: false },
          { value: 135, name: '视频广告', id: 12, flag: false },
          { value: 1548, name: '搜索asdq引擎', id: 122, flag: false },
          { value: 1548, name: '搜索asd引擎', id: 13, flag: false },
          { value: 1548, name: 'asd', id: 1222, flag: false },
          { value: 1548, name: 'asdsa', id: 1333, flag: false },
          { value: 1548, name: 'asd', id: 111111, flag: false },
          { value: 1548, name: 'd', id: 14444, flag: false },
          { value: 1548, name: 'dasd', id: 231, flag: false },
          { value: 1548, name: 'dasdasd', id: 111, flag: false },
          { value: 1548, name: 'daasdsd', id: 123, flag: false },
          { value: 1548, name: 'dasasdd', id: 232321, flag: false },
          { value: 1548, name: 'daasdsd', id: 324324321, flag: false }
        ])
      })
    },
    getData () {
      this.newP().then(res => {
        this.data = res
        this.$nextTick(() => {
          this.echartsInit()
        })
      })
    },
    echartsInit () {
      const myCharts = echarts.init(this.$refs.pie)
      const option = {

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },

        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.data.filter(val => {
              return !val.flag
            })
          }
        ]
      }
      myCharts.setOption(option)
      // window.addEventListener('resize', function () {
      //   myCharts.resize()
      // })
    },
    labelClick (item) {
      item.flag = !item.flag
      this.echartsInit()
    }
  }
}
</script>
<style lang='scss' scoped>
.wrapper{

    width:100%;
    height:100%;
    position: relative;
    &-pie{
        width:600px;
        height:200px;
        // background:#0068ff;

        &-lable{
            top:10px;
            left:10px;
            height:100%;
            overflow: auto;
            position: absolute;
            z-index: 9999999999999;
            li{
               cursor: pointer;
               color: #666666;
               &.active{
                 color:#0068ff;
               }
            }
            &::-webkit-scrollbar {
                width:2px;

        }
         &::-webkit-scrollbar-track {
                border-radius:2px;
                background-color:#0068ff;
                height:100%;
        }
         &::-webkit-scrollbar-thumb {
        border-radius:10px;
        background:black;
          background-color:gold;

        }
        }
    }
}
</style>
