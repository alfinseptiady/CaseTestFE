<template>
  <!--
     This example requires updating your template:
 
     ```
     <html class="h-full bg-gray-100">
     <body class="h-full">
     ```
   -->
 
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                 <span class="sr-only">View notifications</span>
                 <BellIcon class="h-6 w-6" aria-hidden="true" />
               </button> -->

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                      @click="logout()">{{ item.name }} </a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>
            <button type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">{{
                item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Daftar Barang</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-9xl py-6 sm:px-5 lg:px-20">
        <!-- Your content -->
        <div class="container ml-20">
          <!-- <h1 class="text-2xl font-bold mt-8 ml-11">Dashboard</h1> -->
          <button
            class="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          <table class="shadow-lg bg-white mt-3 ">
            <tr>
              <th class="bg-blue-100 border px-5 py-3 text-center">ID data</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Nama Barang</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Harga</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Stock</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Nama Supplier</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">No Telp</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Alamat</th>
              <th class="bg-blue-100 border px-5 py-3 text-center">Actions</th>
            </tr>
            <!-- mengdebug data apakah muncul di console -->
            {{ console.log(data.data) }}

            <!-- mengambil data api  -->
            <tr v-for="item in data.data" :key="item.id">
              <td class="border px-5 py-3">{{ item.id }}</td>
              <td class="border px-5 py-3">{{ item.namaBarang }}</td>
              <td class="border px-5 py-3">{{ item.harga }}</td>
              <td class="border px-5 py-3">{{ item.stok }}</td>
              <td class="border px-5 py-3">{{ item.supplier.namaSupplier || "-" }}</td>
              <td class="border px-5 py-4">{{ item.supplier.noTelp || "-" }}</td>
              <td class="border px-5 py-4">{{ item.supplier.alamat || "-" }}</td>

              <!--btn edit -->
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-2"
                @click="this.$router.push(`/editbarang/${item.id}`)">
                Edit
              </button>

              <!-- btn delete -->
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

          <!-- membuat button next and previous ketika datanya sudah habis makan button akan di disable -->
          <div class="flex justify-center mt-5 mr-32">
            <button
              class="bg-blue-500 hover:bg-blue-700 mr-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="previousPage" :disabled="currentPage === 1">
              Previous
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="nextPage" :disabled="currentPage * data.limit >= data.total_page">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
 
<script>
// import axios
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      limit: 10,
      offset: 1,
      currentPage: 1,
      totalItems: 0,
      isLogin : false
    };
  },
  // dataID() {
  //   return {
  //     no : ,
  //   };
  // },

  // membuat methods
  methods: {

    // membuat methods data daftar barang
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
          this.$router.push("/");

        });
    },

    // methods previous page
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.offset = (this.currentPage - 1) * this.limit;
        this.getDaftarBarang();
      }
    },

    // methods next page
    nextPage() {
      console.log("sssss", this.offset);
      this.currentPage++;
      this.offset = (this.currentPage - 1) * this.limit;
      this.getDaftarBarang();
      if (this.currentPage * this.limit > this.totalItems) {
      }
    },

    // methods delete data dengan menggunakan id
    deleteData(id) {
      const token = localStorage.getItem('token');
      confirm("are you sure you want to delete")
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios
        .delete(`http://159.223.57.121:8090/barang/delete/${id}`, this.item)
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
    },

    async logout() {
      localStorage.removeItem('token')
      console.log("aaaa", xxx)
    },
  },

  // useEffect
  mounted() {
    console.log("ssssssssdddd", localStorage.getItem('token'))
    if (!localStorage.getItem('token')) {
      this.isLogin = true
    }
    this.getDaftarBarang();
  },

  // axios
  //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //   .then(response => (this.info = response))
};
</script>
 
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Daftar Barang', href: '/alldatabarang', current: true },
  { name: 'Daftar Pembayaran', href: '/alldatapembayaran', current: true },
  //  { name: 'Projects', href: '#', current: false },
  //  { name: 'Calendar', href: '#', current: false },
  //  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '/' },
]
</script>