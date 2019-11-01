import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Joke from '../views/Joke.vue'
import Ask from '../views/Ask.vue'
import Car from '../views/Car.vue'
import Baby from '../components/Baby.vue'
import Center from '../views/Center.vue'
import Login from '../views/Login.vue'
import LogOut from '../views/LogOut.vue'
import Regest from '../views/Regest.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/joke',
    name: 'joke',
    component: Joke
  },
  {
    path: '/ask/:id',
    name: 'ask',
    component: Ask,
	children:[
		{
			path:"baby",
			name: "baby",
			component: Baby
		}
	]
  },
  {
    path: '/car',
    name: 'car',
    component: Car
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logOut',
    name: 'logOut',
    component: LogOut
  },
  {
    path: '/regest',
    name: 'regest',
    component: Regest
  },
]

const router = new VueRouter({
  routes
})

export default router
