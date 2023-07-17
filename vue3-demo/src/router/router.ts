export default [
  {
    path: "/",
    redirect: "/login",
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          role: 'common',
          title: 'home'
        }
      },
      // articles route
      {
        path: '/menu1',
        name: 'menu1',
        component: () => import('@/views/menu/menu1.vue'),
        meta: {
          role: 'common',
          title: 'menu1'
        }
      },
      {
        path: '/menu2',
        name: 'menu2',
        component: () => import('@/views/menu/menu2.vue'),
        meta: {
          role: 'common',
          title: 'menu2'
        }
      },
      {
        path: '/menu3',
        name: 'menu3',
        component: () => import('@/views/menu/menu3.vue'),
        meta: {
          role: 'common',
          title: 'menu3'
        }
      },
     
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      role: 'common',
      title: 'login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue'),
    meta: {
      role: 'common',
      title: 'register'
    }
  },
]
