<template>
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mt-8">Edit Data</h1>
        <form @submit.prevent="updateData">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="namaBarang">Nama Barang</label>
                <input v-model="formData.namaBarang"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="namaBarang" type="text" placeholder="Nama Barang">
            </div>
            <!-- harga -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="harga">Harga</label>
                <input v-model="formData.harga"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="harga" type="text" placeholder="Harga">
            </div>
            <!-- stock -->
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="stok">Stock</label>
                <input v-model="formData.stok"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="stok" type="text" placeholder="Stock">
            </div>

            <!-- nama supplier -->
            <!-- <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="namaSupplier">Nama Supplier</label>
                <input v-model="formData.namaSupplier"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="namaSupplier" type="text" placeholder="namaSupplier">
            </div> -->

            <!-- alamat -->
            <!-- <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">Alamat</label>
                <input v-model="formData.alamat"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="alamat" type="text" placeholder="Alamat">
            </div> -->
            <!-- Tambahkan input lain sesuai kebutuhan -->
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Update
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
            formData: {
                namaBarang: '',
                harga: 0,
                stok: 0,
                // namaSupplier:'',
                // alamat:'',
                // Tambahkan properti lain sesuai kebutuhan
            },
            id: '', // Simpan ID data yang akan diupdate
        };
    },
    mounted() {
        this.id = '3364';
        this.getData();
    },
    created() {
        this.getData();
    },
    watch: {
        $route(to, from) {
            this.getData();
        },
    },
    methods: {
        updateData() {
            const id = this.$route.params.id;
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios
                .put(`http://159.223.57.121:8090/barang/update/${id}`
                    , this.formData)
                .then(response => {
                    console.log(response.data);
                    alert("Berhasil Updated Data");
                    this.$router.push('/dashboard');
                    // Lakukan tindakan setelah berhasil mengupdate data, seperti menampilkan pesan sukses atau meredirect pengguna ke halaman lain
                })
                .catch(error => {
                    console.error(error.response.data);
                    // Tangani kesalahan saat melakukan update data, seperti menampilkan pesan kesalahan
                });
        },
        getData() {
            console.log("aaaaa", this.id)
            console.log("xxxxxxxx", this.$route.params.id)
            const id = this.$route.params.id;
            axios
                .get(`http://159.223.57.121:8090/barang/find-by-id/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                .then(response => {
                    console.log("resssss", response.data.data)
                    const { namaBarang, harga, stok } = response.data.data;
                    // const { namaSupplier,alamat } = response.data.data.supplier;

                    this.formData.namaBarang = namaBarang;
                    this.formData.harga = harga;
                    this.formData.stok = stok;
                    // this.formData.namaSupplier = namaSupplier;
                    // this.formData.alamat = alamat;

                })
                .catch(error => {
                    console.error(error.response.data);
                });
        },
    },
};
</script>
  
  