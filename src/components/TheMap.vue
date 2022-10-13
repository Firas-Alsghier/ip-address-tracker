<template>
  <div class="leaflet" v-if="ipData">
    <!-- <div id="map"></div> -->
    <!-- <h2>{{ ipData }}</h2> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import leaflet from 'leaflet';

export default {
  computed: {
    ...mapState(['ipData']),
  },
  updated() {
    console.log(this.ipData);
    document.querySelector('.leaflet').innerHTML = `<div id="map" style="height: 60vh; position: relative; z-index: 0;"></div>`;
    let map;
    // map.remove();
    map = leaflet.map('map').setView([this.ipData.data.location.lat, this.ipData.data.location.lng], 13);
    leaflet
      .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);
    leaflet.marker([this.ipData.data.location.lat, this.ipData.data.location.lng]).addTo(map);
  },
};

// this.ipData.data.location.lat, this.ipData.data.location.lng
</script>

<style lang="scss" scoped>
#map {
  height: 60vh;
  position: relative;
  z-index: 0;
}

// h1 {
//   display: none;
// }
</style>
