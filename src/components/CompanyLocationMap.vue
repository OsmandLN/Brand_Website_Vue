<template>
  <div id="company-location-map"></div>
</template>

<style lang="scss" scoped>
#company-location-map {
  width: 90%;
  height: 400px;
  position: relative;
  top: 10vh;
  border-radius:5px;
  margin: 40px auto
}

@media screen and (min-width: 768px) {
  #company-location-map {
    width: 80%;
    height: 450px;
  }
}

@media screen and (min-width: 1024px) {
  #company-location-map {
    width: 60%;
    // height: 450px;
  }
}
</style>

<script>
// eslint-disable-next-line
import L from 'leaflet'
// eslint-disable-next-line
import { Icon } from 'leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'CompanyLocationMap',
  // components: {
  //   LMap, LTileLayer, LMarker
  // },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = L.map('company-location-map').setView([25.10, 121.5598], 15)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    L.marker([25.10, 121.5598]).addTo(this.map).bindTooltip('我們在這裡!').openTooltip()
  }
}
</script>
