import { createApp } from 'vue'
// import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
import router from './router'
import '../src/assets/scss/reset.scss'

// import axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// import vue-leaflet
import 'leaflet/dist/leaflet.css'

// import Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// app
const app = createApp(App)

// use the plugins
app.use(router)
app.use(VueAxios, axios)
app.use(store)
app.use(vuetify)

app.mount('#app')
