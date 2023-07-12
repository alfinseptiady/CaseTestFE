<template>
    <div class="container mx-10">
      <h1 class="text-2xl font-bold mt-8">Tambah Barang Disini Cuy</h1>
      <form class="mt-4" @submit.prevent="createBarang">
        <!-- nama barang -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="namaBarang">Nama Barang</label>
          <input v-model="form.namaBarang" class="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="namaBarang" type="text" placeholder="Nama Barang">
        </div>
        <!-- harga -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="harga">Harga</label>
          <input v-model="form.harga" class="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="harga" type="number" placeholder="Harga">
        </div>
        <!-- stock -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="stok">Stock</label>
          <input v-model="form.stok" class="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stok" type="number" placeholder="Stock">
        </div>
        <div class="absolute items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-3" type="submit">
            Tambah Barang
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="this.$router.push('/dashboard')">
            Kembali
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
        form: {
        namaBarang: '',
        harga: 0,
        stok: 0,
        },
      };
    },
    methods: {
      async createBarang(){
        try {
          const token = localStorage.getItem('token');
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('http://159.223.57.121:8090/barang/create', this.form)
          console.log("create", response)
          alert("Create Successful");
          this.$router.push('/dashboard');  
        } catch (error) {
          console.log("error", error)
            alert("create failed")
        }
      },
      // async tambahBarang() {
      //   const token = localStorage.getItem('token');
      //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //   axios
      //     .post('http://159.223.57.121:8090/barang/create', this.form)
      //     .then(response => {
      //       console.log(response.data);          
      //     })
      //     .catch(error => {
      //       console.error(error.response.data);
      //     });
      // },
      
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  