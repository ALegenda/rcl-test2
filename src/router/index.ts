import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            meta: {
                title: 'Открытые квалификации // РКЛ',
            }
        },
        {
            path: '/docs',
            name: 'docs',
            component: () => import('../views/DocsView.vue'),
            meta: {
                title: 'Документы // РКЛ',
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router
