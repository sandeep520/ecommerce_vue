import Vue from 'vue'
import VueRouter from 'vue-router'
import  Home from '../components/Home/Home.vue'
import LoginPage from '../components/Login/LoginPage.vue'
import About from '../components/Pages/About.vue'
import SignUp from '../components/Signup/SignUp.vue'
import Cart from '../components/Products/Cart.vue'
import ContactPage from '../components/Pages/ContactPage.vue'
import ProducDeails from '../components/Products/ProductDetails.vue'
import PageNotFound from '../components/Pages/PageNotFound.vue'
import BestSeller from '../components/Pages/BestSeller.vue'
import ProfilePage from '../components/UserProfile/ProfilePage.vue'
import CheckOut from '../components/Products/CheckOut.vue'
import EditProfile from '../components/UserProfile/EditProfile.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/login',
    name:'login',
    component: LoginPage
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path:'/signup',
    name:'signup',
    component: SignUp
  },
  {
    path:'/cart/:id',
    name:'cart',
    component:Cart
  },
  
  {
    path:'/contact',
    name:'contact',
    component:ContactPage
  },
  {
    path:'/productDetails/:id',
    name:'productDetails',
    component:ProducDeails
  },
  {
    path:'/bestseller',
    name:'bestSeller',
    component:BestSeller
  },
  {
    path:'/checkout',
    name:'checkout',
    component:CheckOut
  },
  {
    path:'/profilepage',
    name:'profilepage',
    component:ProfilePage
  },
  {
    path:'/editprofile/:id',
    name:'editprofile',
    component:EditProfile
  },
  {
    path:'/*',
    name:'pagenotfound',
    component:PageNotFound
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
