import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../views/recommend/recommend.vue'

Vue.use(Router)

const Singer = () => import(/* webpackChunkName: "singer" */ '../views/singer/singer.vue')
const Rank = () => import(/* webpackChunkName: "rank" */ '../views/rank/rank.vue')
const Search = () => import(/* webpackChunkName: "search" */ '../views/search/search.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
