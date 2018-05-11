import Home from '../components/home.vue';
import About from '../components/about.vue';
const routes = [
  { path: '/', component: Home ,name: "首页"},
  { path: '/home', component: Home ,name: "首页"},
  { path: '/about', component: About ,name: "关于我们"}
]
export default routes