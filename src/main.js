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

// app
const app = createApp(App)

// use the plugins
app.use(router)
app.use(VueAxios, axios)
// app.use(Vuex)
app.use(store)

app.mount('#app')
