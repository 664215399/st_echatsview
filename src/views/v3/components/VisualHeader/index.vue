<template>
  <div class="Visual-Header">
    <ul class="Visual-Header-left">
      <li
        v-for="(item, index) in 4"
        :key="index"

      ></li>
    </ul>
    <div class="Visual-Header-title">可视化面板--V3</div>
    <ul class="Visual-Header-right">
      <li
        v-for="(item, index) in 4"
        :key="index"

      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  destroyed () {

  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.Visual-Header {
  height: 70px;
  @include flex-mixins(space-between, flex-end);
  width: 75%;
  margin: auto;
  &-title {
    text-align: center;
    color: #fff;
    line-height: 70px;
    font-size: 38px;
  }
  &-left,
  &-right {
    flex: 1;
    padding: 0px 20px;
    box-sizing: border-box;
    li {
      width: 90px;
      height: 25px;
      border-radius: 20px;
      background: #02b687;
      margin: 0px 10px;
    }
  }
  &-left {
    @include flex-mixins(flex-start, flex-end);
    $liOp: 0.25, 0.5, 0.75, 1;
    @each $c in $liOp {
      $i: index($liOp, $c);
      li:nth-child(#{$i}) {
        opacity: $c;
      }
    }

  }
  &-right {
    @include flex-mixins(flex-end, flex-end);
    $liOp: 1, 0.75, 0.5, 0.25;
    @each $c in $liOp {
      $i: index($liOp, $c);
      li:nth-child(#{$i}) {
        opacity: $c;
      }
    }

  }
}
</style>
