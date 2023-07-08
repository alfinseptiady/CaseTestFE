import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';
import TambahBarang from './components/TambahBarang.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/tambahbarang', component: TambahBarang },


  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.mount('#app');
