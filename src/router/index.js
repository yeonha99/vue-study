import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ( /* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ContactView.vue')
    },
    {
        path: '/basic',
        name: 'basic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "basic" */ '../views/BasicView.vue')
    },
    {
        path: '/databinding',
        name: 'databinding',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "databinding" */ '../views/DataBinding.vue')
    },
    {
        path: '/databindinghtml',
        name: 'databindinghtml',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
    },
    {
        path: '/databindinginputtext',
        name: 'databindinginputtext',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingInputText.vue')
    },
    {
        path: '/listview',
        name: 'listview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "listview" */ '../views/ListView.vue')
    },
    {
        path: '/render',
        name: 'render',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "rabderview" */ '../views/RenderView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router