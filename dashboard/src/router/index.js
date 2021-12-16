import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedback/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true // metadado da rota
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true // metadado da rota
    }
  },
  {

    path: '/:pathMatch(.*)*', // regex próprio do vue router: se cair em qualquer rota que não tenha definido nesse arquivo, vai para a home
    redirectTo: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
