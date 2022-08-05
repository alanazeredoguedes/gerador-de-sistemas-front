const routes = [
    /** Dashboard Routes */
    {
        path: '/',
        component: () => import('@/layouts/DashboardTemplate.vue'),
        children: [
            {
                path: '/',
                name: 'homePage',
                component: () => import('@/pages/PaginaInicial.vue')
            },
            {
                path: '/sobre',
                name: 'sobre',
                component: () => import('@/pages/Sobre.vue')
            },
        ]

    },
    /** Auth Routes */
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate.vue'),
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import('@/pages/Auth/LoginPage.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('@/pages/Auth/RegisterPage.vue')
            },
        ]

    },
    /** Error Routes */
    {
        path: '/',
        component: () => import('@/layouts/BaseTemplate.vue'),
        children: [
            {
                path: '/:pathMatch(.*)*',
                name: 'error404',
                component: () => import('@/pages/Error/404.vue')
            },
        ]
    },
]

export default routes