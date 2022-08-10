const routes = [
    /** Diagrams Routes */
    {
        path: '/',
        component: () => import('@/layouts/DiagramTemplate.vue'),
        children: [
            {
                path: '/',
                name: 'diagram',
                component: () => import('@/pages/diagram/Diagram.vue')
            },
        ]

    },
    /** Dashboard Routes */
    {
        path: '/',
        component: () => import('@/layouts/DashboardTemplate.vue'),
        children: [
            {
                path: '/board',
                name: 'homePage',
                component: () => import('@/pages/dashboard/home/Dashboard.vue')
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
                component: () => import('@/pages/auth/LoginPage.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('@/pages/auth/RegisterPage.vue')
            },
            {
                path: '/reset-password',
                name: 'resetPassword',
                component: () => import('@/pages/auth/ResetPassword.vue')
            },
            {
                path: '/new-password',
                name: 'newPassword',
                component: () => import('@/pages/auth/NewPassword.vue')
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
                component: () => import('@/pages/error/404.vue')
            },
            {
                path: '/terms',
                name: 'terms',
                component: () => import('@/pages/terms/Terms.vue')
            },
        ]
    },
]

export default routes