<template>
  <div>
    <TheHeader />
    <TheMap />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMap from '@/components/TheMap.vue';
import axios from 'axios';
export default {
  components: {
    TheHeader,
    TheMap,
  },

  beforeMount() {
    axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_O8H1w6YQp92vMea55P1RNV48oeAS9').then((res) => {
      return this.$store.commit('UPDATE_DATA', res);
    });
    // this.$store.dispatch('fetchIp');
  },
};
// https://geo.ipify.org/api/v2/country,city?apiKey=at_qVrlBkUa3RkFlrx7sh0vGlG6DFXXr
</script>

<style lang="scss">
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
