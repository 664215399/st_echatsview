<template>
  <div class='Visual'>
    <visual-header></visual-header>
    <visual-body></visual-body>
  </div>
</template>

<script>
import VisualBody from './components/VisualBody/index.vue'
import VisualHeader from './components/VisualHeader/index.vue'
export default {
  components: { VisualHeader, VisualBody },
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
@import '@/assets/scss/mixins.scss';
.Visual{
  height:100vh;
  overflow: auto;
  @include bg-image('../../assets/images/v3/background.png');
}
</style>
