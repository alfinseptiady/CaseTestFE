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
    <table class="shadow-lg bg-white mt-3 ml-12">
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

    <!-- pagination -->
    <!-- <div class=" mr-60 border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="flex flex-1 sm:hidden">
      <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ data.page }}
          to
          {{ data.limit }}
        
          of
          {{ data.total_page }}
          results
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a> -->
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <!-- <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
          <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div> -->
   <!-- <div class="container mx-auto">
    <h1 class="text-2xl font-bold mt-8">Daftar Barang</h1>
    <ul>
      <li v-for="barang in daftarBarang" :key="barang.id">
        {{ barang.name }}
      </li>
    </ul>
    <div class="mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="loadMore">
        Load More
      </button>
    </div>
  </div> -->

  <div class="flex justify-center mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 mr-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      @click="previousPage" 
      :disabled="currentPage * data.limit >= data.total_page">
        Previous
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      @click="nextPage" 
      :disabled="currentPage * data.limit >= data.total_page"
      >
        Next
      </button>
    </div>  
  </div>
  
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      limit: 5,
      offset: 1,
      currentPage: 1,
      totalItems: 0,
    };
  },
  // dataID() {
  //   return {
  //     no : ,
  //   };
  // },
  methods: {
    getDaftarBarang() {
      axios
      .get('http://159.223.57.121:8090/barang/find-all', {
        params: {
            limit: this.limit,
            offset: this.offset,
          },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
      .then(response => {
        console.log("xxxx", response)
        this.data = response.data;
      })
      .catch(error => {
        console.error(error.response.data);
        alert("Gagal Menampilkan Data");
      });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.offset = (this.currentPage - 1) * this.limit;
        this.getDaftarBarang();
      }
    },
    nextPage() {
      console.log("sssss", this.offset);
      this.currentPage++;
      this.offset = (this.currentPage - 1) * this.limit;
      this.getDaftarBarang();
      if (this.currentPage * this.limit < this.totalItems) {
        
      }
    },
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
    this.getDaftarBarang();
    },
   
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
};
</script>
