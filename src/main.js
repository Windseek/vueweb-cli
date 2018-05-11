import Vue from 'vue';
import app from "./app.vue";
import VueRouter from 'vue-router';
import vuex from 'vuex';
Vue.use(vuex);
Vue.use(VueRouter);
import routes  from './routes';
import '@/common.css';

const router = new VueRouter({
  routes // routes: routes 的简写
});

new Vue({
    el: "#app",
    router,
    template: '<app/>',
    components: { app }
})