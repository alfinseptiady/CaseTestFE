<template>
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mt-8">Login</h1>
      <form class="mt-4" @submit.prevent="created">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input v-model="masuk.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input v-model="masuk.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
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
        masuk: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
        async created() {
          try {
            const response = await axios.post('http://159.223.57.121:8090/auth/login',this.masuk)
            console.log("masuk", response)
            localStorage.setItem('token', response.data.data.token);
            alert("Login successful")
            this.$router.push('/dashboard');  
          } catch (error) {
            console.log("error", error)
            alert("login failed")
          }
        

        },
      // async login() {
      //   const xxx = await axios
      //     .post('http://159.223.57.121:8090/auth/login', this.masuk)
      //     .then(response => {
      //       // const token = response.data.token;
      //       console.log("ssssssssss", response)
      //       // localStorage.setItem('token', token);
      //       // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //       alert("Login successful")
      //       // this.$router.push('/dashboard');        
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      //     console.log("aaaa", xxx)
      // },
    },
  };
  </script>
  

  