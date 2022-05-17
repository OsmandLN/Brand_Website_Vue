import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/scss/reset.scss'

// use axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// use bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

// use the plugins
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
