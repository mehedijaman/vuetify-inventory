// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/product/List.vue'),
        children:[
          {
            path: ':id/details',
            name: 'ProductDetails',
            component: () => import('@/views/product/Details.vue'),
          },
          {
            path: ':id/edit',
            name: 'ProductEdit',
            component: () => import('@/views/product/Edit.vue'),
          }
        ]
      },
      {
        path: 'pos',
        name: 'Pos',
        component: () => import('@/views/Pos.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
