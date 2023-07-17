import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import AllDataBarang from './components/DataBarang/AllDataBarang.vue';
import TambahBarang from './components/DataBarang/TambahBarang.vue';
import EditBarang from './components/DataBarang/EditBarang.vue';
import DeleteBarang from './components/DataBarang/DeleteBarang.vue'; 
import AllDataPembayaran from './components/DataPembayaran/AllDataPembayaran.vue'


import './style.css';

const routes = [
  // { path: '/Welcome', component: Welcome },
  { path: '/register', component: Register },
  { path: '/', component: Login },
  { path: '/alldatabarang', component: AllDataBarang },
  { path: '/tambahbarang', component: TambahBarang },
  { path: '/editbarang/:id', component: EditBarang },
  { path: '/deletebarang/:id', component: DeleteBarang },
  { path: '/alldatapembayaran', component: AllDataPembayaran}





  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(router);
app.mount('#app');
