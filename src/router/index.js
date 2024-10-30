import { createRouter, createWebHistory } from 'vue-router'
import Livechat from "../views/Livechat.vue"
import Football from "../views/FootballUpdate.vue"
import Calender from "../views/Football.vue"


const routes = [

  {
    path: "/livechat",
    name: "Livechat",
    component: Livechat
  },
  {
    path: "/",
    name: "Football",
    component: Football
  },
  {
    path: "/footballs",
    name: "Highlights",
    component: Calender
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router