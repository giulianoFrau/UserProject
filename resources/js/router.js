// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';


Vue.use(Router);

const routes = [
    {
        path: '/home',
        name: 'welcome',
        component: Welcome,
    },
  	{ // new route for our categories page
        path: '/list',
        name: 'list',
        component: () => import('./views/List.vue'), // Vue we just created
    },
    { // new route for our categories page
        path: '/role',
        name: 'role',
        component: () => import('./views/Role.vue'), // Vue we just created
    },
    { // new route for our categories page
        path: '/crud',
        name: 'crud',
        component: () => import('./views/CrudApp.vue'), // Vue we just created
    },
];
const router = new Router({
    routes: routes,
  	linkActiveClass: 'active'
});

export default router;