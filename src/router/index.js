import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import TheHomePage from '../views/TheHomePage.vue'
import TheAboutPage from '../views/TheAboutPage.vue'
import MyFavoriteList from '../views/MyFavoriteList.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: TheHomePage
  },
  {
    path: '/about',
    name: 'about',
    component: TheAboutPage
  },
  {
    path: '/my_favorite_list',
    name: 'my_favorite_list',
    component: MyFavoriteList
  },
  // In Vue3.x, the NotFound path differs from that in Vue2.x.
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
