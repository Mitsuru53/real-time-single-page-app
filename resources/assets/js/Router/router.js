import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
{ path: '/login', component: Login }
];

const router = new VueRoueter({
  routes
})

export default router;