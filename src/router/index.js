import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta: {guestOnly: true}
  },
   {
     path: '/login',
     name: 'Login',
     component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue"),
     meta: {guestOnly: true}
   },
   {
     path: '/register',
     name: 'Register',
     component: () => import(/* webpackChunkName: "register" */ "../views/Register.vue"),
     meta: {guestOnly: true}
   },
   {
     path: '/dashboard',
     name: 'Dashboard',
     component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
     meta: { authOnly: true}
   }
];

 

const router = createRouter({
  history: createWebHistory(),
  routes
});
let isLogin = () => {
    return localStorage.getItem('auth');
}

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.authOnly)) {
    if(!isLogin()) {
      next({
        path:'/login',
        query: {redirect : to.fullPath}
      })
    }
    else {
      next()
    }
  }
  else if(to.matched.some(record => record.meta.guestOnly)) {
      if(isLogin()) {
        next({
          path:'/dashboard',
          query: {redirect : to.fullPath}
        })
      }
      else {
        next()
      }
    }
  else {
    next()
  }
})

export default router;
