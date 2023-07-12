import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import Login from './components/Login.vue';
import Welcome from './components/Welcome.vue';
import TambahBarang from './components/TambahBarang.vue';
import EditBarang from './components/EditBarang.vue';
import './style.css';

const routes = [
  { path: '/Welcome', component: Welcome },
  { path: '/register', component: Register },
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/tambahbarang', component: TambahBarang },
  { path: '/editbarang/:id', component: EditBarang },




  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.mount('#app');
