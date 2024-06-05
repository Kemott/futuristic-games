import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import SingleGameView from '../views/SingleGameView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import SingleGameDetailsView from '../views/SingleGameDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'games',
      component: GamesView,
      children: [
        {
          path: '/:game',
          component: SingleGameView,
          name: 'singleGame',
          children: [
            {
              path: '',
              component: SingleGameDetailsView,
              name: 'gameDetails'
            },
            {
              path: 'privacypolicy',
              component: PrivacyPolicyView,
              name: 'privacyPolicy'
            }
          ]
        }
      ]
    }
  ]
})

export default router
