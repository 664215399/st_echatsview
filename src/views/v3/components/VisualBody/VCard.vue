<template>
  <div class="card">
    <div class="card-title">
      <div :class="['card-title-wrapper', position === 'right' ? 'right' : '']">
        <div class="card-title-wrapper-cont">
          <h2>完成率</h2>
          <p>67%</p>
        </div>
      </div>
    </div>
    <div class="card-animation">
      <div class="card-animation-wrapper">
        <div class="card-animation-wrapper-sd" v-if="position === 'left'"></div>
        <ul :class="['card-animation-wrapper-cricle', position === 'right' ? 'right' : '']">
          <li v-for="(val, index) in 8" :key="index"></li>
        </ul>
        <div class="card-animation-wrapper-sd" v-if="position === 'right'"></div>
      </div>

      <div class="card-animation-wrapper">
        <div class="card-animation-wrapper-sd" v-if="position === 'left'"></div>
        <ul :class="['card-animation-wrapper-cricle', position === 'right' ? 'right' : '']">
          <li v-for="(val, index) in 8" :key="index"></li>
        </ul>
        <div class="card-animation-wrapper-sd" v-if="position === 'right'"></div>
      </div>
    </div>
    <div class="card-top">
      <ul :class="['card-top-wrapper', position === 'right' ? 'right' : '']">
        <li>
          <p>No:1</p>
          <div></div>
        </li>
        <li>
          <p>No:2</p>
          <div></div>
        </li>
        <li>
          <p>No:3</p>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default () {
        return 'left'
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/animation.scss';
.card {
  flex: 0.25;
  &-title {
    height: 30%;
    &-wrapper {
      margin: auto;
      width: 180px;
      height: 180px;
      background: url('../../../../assets/images/v3/border.png') no-repeat center center/cover;
      padding: 20px 20px 0px 0px;
      box-sizing: border-box;
      &-cont {
        background: url('../../../../assets/images/v3/cricle.png') no-repeat center center/cover;
        width: 55%;
        height: 60%;
        margin: 15% auto;
        text-align: center;
        font-size: 14px;
        padding-top: 20px;
        box-sizing: border-box;
        animation: rotate-v3 5s ease infinite;
        p {
          font-size: 24px;
        }
      }
    }
    .right {
      padding: 20px 0px 0px 20px;
      // transform-origin: 50% 50%;
      // transform: rotate(270deg);
      background: url('../../../../assets/images/v3/border02.png') no-repeat center center/cover;
    }
  }
  &-animation {
    height: 40%;
    &-wrapper {
      height: 50%;
      display: flex;
      align-items: center;
      &-sd {
        flex: 0.5;
      }
      &-cricle {
        height: 100%;
        flex: 0.5;
        display: flex;
        align-items: center;
        li {
          border-radius: 50px;
          width: 13px;
          height: 13px;
          background: #00e4c8;
        }
        @for $i from 1 through 8 {
          li:nth-of-type(#{$i}) {
            width: $i + 14px;
            height: $i + 14px;
            @if $i==7 {
              height: 40%;
            } @else if($i==8) {
              height: 60%;
            }
            margin-right: 10px;
          }
        }
      }
      .right {
        flex-direction: row-reverse;
      }
    }
  }
  &-top {
    height: 35%;
    &-wrapper {
      width: 60%;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: flex-end;
      li {
        flex: 0.3;
        height: 100%;
        // background-size: 70%;
        p {
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
        }
      }
      $liColor: #ff7a9a, #01c793, #01c2aa;
      @each $c in $liColor {
        $i: index($liColor, $c);
        li:nth-child(#{$i}) {
          height: 100%-$i * 10%;
          background: url('../../../../assets/images/v3/#{$i}.png') no-repeat center bottom;
          p {
            color: $c;
          }
        }
      }
      // @for $i from 1 through 3 {
      //   li:nth-of-type(#{$i}) {
      //     // $c: index($liColor, $i);
      //     height: 100%-$i * 10%;
      //     background: url('../../../../assets/images/v3/#{$i}.png') no-repeat center bottom;
      //   }
      // }
    }
    .right{
      flex-direction: row-reverse;
    }
  }
}
</style>
