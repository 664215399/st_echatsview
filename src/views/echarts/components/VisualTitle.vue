<template>
  <div class="VisualTitle">
    <ul class="VisualTitle-num">
      <li v-for="(item,index) in numList" :key="index">{{item}}</li>
    </ul>
    <ul class="VisualTitle-cont">
      <li v-for="(item,index) in titleList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// import { marketStatistics } from '../datas/data'
export default {
  props: {
    marketStatistics: {
      type: Array,
      default: () => {
        return [
          { title: '', num: 0 }
        ]
      }
    }
  },
  watch: {
    marketStatistics (newVal) {
      if (newVal) {
        this.titleList = newVal.map(val => {
          return val.title
        })
        this.numList = newVal.map(val => {
          return val.num
        })
      }
    }
  },
  data () {
    return {
      titleList: [],
      numList: []
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/scss/mixins';
@font-face {
  font-family: electronicFont;
  src: url('../../../assets/font/DS-DIGIT.TTF');
}
.VisualTitle{
    margin:0px 10px 0px 10px;
    width:calc(100% - 20px);
    background:rgba(101,132,226,.1);
    padding:15px 15px 15px 15px;
    box-sizing: border-box;
    ul{
        @include VisualTitle-flex;
    }
    &-num{
        border:1px solid rgba(25, 186, 139, 0.17);
        box-sizing: border-box;
        position: relative;
        li{
            height:80px;
            font-size: 70px;
            color:#ffeb7b;
            line-height: 80px;
            font-family:electronicFont ;
        }
        &::before{
            width:30px;
            height:10px;
            content: '';
            position: absolute;
            border-top:2px solid #02a6b5;
            border-left:2px solid #02a6b5;
            top:0px;
            left:0px;
        }
        &::after{
            width:30px;
            height:10px;
            content: '';
            position: absolute;
            border-right:2px solid #02a6b5;
            border-bottom:2px solid #02a6b5;
            bottom:0px;
            right:0px;
        }
    }
    &-cont{
         li{
            height:40px;
            color:rgba(255, 255, 255, 0.7);
            font-size: 18px;
            line-height: 40px;
            padding-top:10px;
            box-sizing: border-box;
         }

     }
}
</style>
