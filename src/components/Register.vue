<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mt-8">Register</h1>
    <form class="mt-4" @submit.prevent="register">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input v-model="daftar.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">profileName</label>
        <input v-model="daftar.profileName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profileName" type="text" placeholder="profileName" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input v-model="daftar.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
   
    return {
      daftar: {
        username: '',
        profileName: '',
        password: '',
      },
    };
  },
  methods: {
    register() { 
      axios
        .post('http://159.223.57.121:8090/auth/register', this.daftar)
        .then(response => {
          console.log(response.data);
          this.$router.push('/login'); 
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          alert("Register successful")   
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },
  },
};
</script>

<style>
/* Tambahkan gaya khusus jika diperlukan */
</style>
