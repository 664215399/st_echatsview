<template>
  <div class="wrapper">
    <v-card></v-card>
    <div class="wrapper-center"></div>
    <v-card :position='position'></v-card>
  </div>
</template>

<script>
import VCard from './VCard'
export default {
  components: { VCard },
  data () {
    return {
      position: 'right'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
.wrapper{
  width:100%;
  height:60%;
  @include flex-mixins(space-between,center);
  >div{
    height:100%;
  }
  &-center{
    flex:.5;
  }

}
</style>
