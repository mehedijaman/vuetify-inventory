// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },

      // Product Routes
      {
        path: '/product',
        children: [
          {
            path: '',
            name: 'Product',
            component: () => import('@/views/product/List.vue'),
          },
          {
            path: 'create',
            name: 'ProductCreate',
            component: () => import('@/views/product/Create.vue'),
          },
          {
            path: 'details/:id',
            name: 'ProductDetails',
            component: () => import('@/views/product/Details.vue'),
          },
          {
            path: 'edit/:id',
            name: 'ProductEdit',
            component: () => import('@/views/product/Edit.vue'),
          },

          // Product Category Routes
          {
            path: 'category',
            children: [
              {
                path: '',
                name: 'ProductCategoryList',
                component: () => import('@/views/product/category/List.vue'),
              },
              {
                path: 'create',
                name: 'ProductCategoryCreate',
                component: () => import('@/views/product/category/Create.vue'),
              },
              {
                path: 'edit/:id',
                name: 'ProductCategoryEdit',
                component: () => import('@/views/product/category/Edit.vue'),
              }
            ],
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
