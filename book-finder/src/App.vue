<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Wrapper from './components/Wrapper.vue';

@Component({
  components: {
    Wrapper,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
