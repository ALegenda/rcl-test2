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
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router
