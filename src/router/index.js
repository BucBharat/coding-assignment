import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Users from '../views/Users.vue';

Vue.use(VueRouter);
const authentication = (to, from, next) => {
  // JWT verification goes here
  if (localStorage.getItem('accessToken')) {
    next();
  } else {
    next({
      name: 'Login',
    });
  }
};
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    beforeEnter: authentication,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
