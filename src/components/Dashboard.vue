<template>
  <div class="container ml-10">
    <h1 class="text-2xl font-bold mt-8">Dashboard</h1>
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      @click="this.$router.push('/tambahbarang')">
      Tambah Data
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
    <table class="shadow-lg bg-white mt-3">
      <tr>
        <th class="bg-blue-100 border px-8 py-4 text-center">ID data</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Nama Barang</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Harga</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Stock</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Nama Supplier</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">No Telp</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Alamat</th>
        <th class="bg-blue-100 border px-8 py-4 text-center">Actions</th>
      </tr>
      {{ console.log(data.data) }}
      <tr v-for="item in data.data" :key="item.id">
        <td class="border px-8 py-4">{{ item.id }}</td>
        <td class="border px-8 py-4">{{ item.namaBarang }}</td>
        <td class="border px-8 py-4">{{ item.harga }}</td>
        <td class="border px-8 py-4">{{ item.stok }}</td>
        <td class="border px-8 py-4">{{ item.supplier.namaSupplier || "-" }}</td>
        <td class="border px-8 py-4">{{ item.supplier.noTelp || "-" }}</td>
        <td class="border px-8 py-4">{{ item.supplier.alamat || "-" }}</td>

        <!-- edit -->
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-2"
          @click="this.$router.push(`/editbarang/${item.id}`)">
          Edit
        </button>

        <!-- delete -->
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-2"
          @click="deleteData(item.id)">
          Delete
        </button>
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
  // dataID() {
  //   return {
  //     no : ,
  //   };
  // },
  methods: {
    deleteData(id) {
      const token = localStorage.getItem('token');
      confirm("are you sure you want to delete")
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios
        .delete(`http://159.223.57.121:8090/barang/delete/${id}`
          , this.item)
        .then(response => {
          console.log(response.data);
          alert("Berhasil Hapus Data");
          this.$router.go(this.$router.currentRoute)
          // Lakukan tindakan setelah berhasil mengupdate data, seperti menampilkan pesan sukses atau meredirect pengguna ke halaman lain
        })
        .catch(error => {
          console.error(error.response.data);
          // Tangani kesalahan saat melakukan update data, seperti menampilkan pesan kesalahan
        });
    }
  },

  mounted() {
    const limit =10;
    const offset = 1;
    axios
      .get('http://159.223.57.121:8090/barang/find-all', {
        params: {
          limit,
          offset,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error(error.response.data);
        alert("Gagal Menampilkan Data");
      });
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  }
};
</script>
