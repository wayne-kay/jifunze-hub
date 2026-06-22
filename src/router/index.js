import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../component/LandingPage.vue'
import Books from '../component/Books.vue'
import Cart from '../component/Cart.vue'
import Library from '../component/Library.vue'
import Profile from '../component/Profile.vue'
import WishList from '../component/WishList.vue'
import ViewBook from '../component/ViewBook.vue'
import Admin from '../component/Admin.vue'
import SignUp from '../component/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/wishlist',
      component: WishList
    },
    {
      path: '/view_book',
      component: ViewBook
    },
    {
      path: '/signup',
      component: SignUp
    }
  ],
})

export default router
