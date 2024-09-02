import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginUser.vue';
// import HomePage from '../views/HomePage.vue';
// import SidebarLayout from '../layouts/SidebarLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
  {
    path        : '/',
    name        : 'Home',
    component   : MainLayout,
    redirect    : '/dashboard',
    children    : [
      {
        path  : '/dashboard',
        name  : 'Dashboard',
        component: () =>import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/federal',
        name: 'Federal',
        component: () =>import('@/views/federal/Federal.vue')
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  // {
  //   path: '/home',
  //   component: SidebarLayout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'HomePage',
  //       component: HomePage
  //     }
  //     // Tambahkan rute lain di sini
  //   ],
  //   meta: { requiresAuth: true }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login']; // Halaman publik yang bisa diakses tanpa login
    const authRequired = !publicPages.includes(to.path); // Halaman yang memerlukan autentikasi
  
    const loggedIn = localStorage.getItem('access_token');
  
    // if (authRequired && !loggedIn) {
    //   return next('/login');
    // }
  
    next();
  });

export default router;
