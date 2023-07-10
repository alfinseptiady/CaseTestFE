<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mt-8">Dashboard</h1>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="getAllData">
      Get All Data
    </button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="this.$router.push('/tambahbarang')">
      tambah Data
    </button>
    <!-- <ul>
      <li v-for="item in data.data" :key="item.id">
        {{ console.log(item) }}
        {{ item.namaBarang }}
        {{ item.harga }}
        {{ item.stok }}
      </li>
    </ul>
    {{ JSON.stringify(data) }} -->

    <table class="shadow-lg bg-white"  v-for="item in data.data" :key="item.id">
  <tr>
    <th class="bg-blue-100 border text-left px-8 py-4">Nama Barang</th>
    <th class="bg-blue-100 border text-left px-8 py-4">Harga</th>
    <th class="bg-blue-100 border text-left px-8 py-4">Stok</th>
  </tr>
  <tr>
    <td class="border px-8 py-4">{{ item.namaBarang }}</td>
    <td class="border px-8 py-4">{{ item.harga }}</td>
    <td class="border px-8 py-4">{{ item.stok }}</td>
  </tr>
  
</table>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getAllData() {
      const limit = 20;
      const offset = 1;
      axios
        .get('http://159.223.57.121:8090/barang/find-all', {
          params: {
            limit,
            offset,
          },
          headers: {
            Authorization: `Bearer ${ localStorage.getItem('token')}`,
          }
        })
        .then(response => {
          this.data = response.data;
          // Lakukan tindakan dengan data yang diperoleh, seperti menampilkan data ke pengguna
        })
        .catch(error => {
          console.error(error.response.data);
          // Tangani kesalahan saat mengambil data, seperti menampilkan pesan kesalahan
        });
    },
  },
};
</script>

<style>
/* Tambahkan gaya khusus jika diperlukan */
</style>
