import loginPage from "../pages/auth/LoginPage.vue";

const routes = [
    /** Dashboard Routes */
    {
        path: '/',
        component: () => import('@/layouts/DashboardTemplate.vue'),
        children: [
            {
                path: '/',
                name: 'homePage',
                component: () => import('@/pages/dashboard/home/Dashboard.vue')
            },
            {
                path: '/app',
                name: 'app_list',
                component: () => import('@/pages/dashboard/app/App.vue')
            },
            {
                path: '/diagramas',
                name: 'diagramas_list',
                component: () => import('@/pages/dashboard/diagramas/Diagramas.vue')
            },
        ]

    },
    /** Diagrams Routes */
    {
        path: '/',
        component: () => import('@/layouts/DiagramTemplate.vue'),
        children: [
            {
                path: '/diagrama/:id',
                name: 'diagrama',
                component: () => import('@/pages/diagram/Diagram.vue')
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
                component: loginPage
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