<template>
  <!-- <div class="container mx-auto">
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
    </div> -->

  <!-- browser -->
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <!-- <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div> -->
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 ml-40">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end mr-5">
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Register <span
              aria-hidden="true">&rarr;</span></a> -->
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Sign In <span
              aria-hidden="true">&rarr;</span></a> -->
          <button class="px-4 py-1 text-sm text-black font-semibold  hover:text-blue-600 focus:blue-900 divide-blue-500">
            Sign In</button>
          <button class="px-4 py-1 text-sm text-black font-semibold rounded-sm hover:text-blue-600 focus:blue-900 mr-40" @click="this.$router.push('/register')">
            Register
          </button>

        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                    item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="relative isolate px-5 pt-1 lg:px-8">
      <div class="absolute inset-x-0 -top-9 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-1 " aria-hidden="true">
        <div
          class="relative left-[calc(30%-11rem)] aspect-[1700/678]  -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[blue] to-[blue] opacity-30 sm:left-[calc(40%-30rem)] sm:w-[62.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto ml-36 mt-48">
        <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div> -->

        <div class="mt-10 flex ml-4 justify-around">
          <div>
            <h1 class="text-4xl font-semibold tracking-tight text-gray-900">
              Sign In to Recharge Direct
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              if you don’t an account <br>you can <a href=""><span class="text-blue-500 "
                  @click="this.$router.push('/register')">Register here!</span></a>
            </p>
            <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                started</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                  aria-hidden="true">→</span></a>
            </div> -->
            <!-- test -->
            <div class="ml-45 mt-4" style="margin-top: -151px;
                width: 360px;
                height: auto;
                margin-left: 400px;">
              <img src="../../public/Picture.png" alt="">
            </div>
            <!-- <div class=" bg-gradient-to-r from-cyan-500 to-blue-500 w-96 h-auto mr-20">
         
          </div> -->
          </div>
          <div class="container ml-11">
            <h1 class=" font-bold mt-1">Selamat datang login akun kamu disini</h1>
            <form class="mt-0" @submit.prevent="created">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username"></label>
                <input v-model="masuk.username"
                  class="shadow appearance-none border rounded w-80 py-2 px-3  text-gray-700 leading-tight bg-blue-200 focus:outline-none focus:shadow-outline"
                  id="username" type="text" placeholder="Username" required>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password"></label>
                <input v-model="masuk.password"
                  class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 bg-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="Password" required>
                <div class="ml-48 mt-2 text-gray-400 hover:text-blue-600 focus:blue-900">
                  <p style="font-size: 13px;"><a href="">Recovery Password?</a></p>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-80"
                  type="submit">
                  Sign In
                </button>
              </div>

              <div class="flex items-center justify-between">
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Page', href: '#' },
  { name: 'Contact', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>
  
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
        const response = await axios.post('http://159.223.57.121:8090/auth/login', this.masuk)
        console.log("masuk", response)
        localStorage.setItem('token', response.data.data.token);
        alert("Login successful")
        this.$router.push('/alldatabarang');
      } catch (error) {
        console.log("error", error)
        alert("login failed")
      }


    },
    async login() {
      const xxx = await axios
        .post('http://159.223.57.121:8090/auth/login', this.masuk)
        .then(response => {
          // const token = response.data.token;
          console.log("ssssssssss", response)
          // localStorage.setItem('token', token);
          // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          alert("Login successful")
          // this.$router.push('/dashboard');        
        })
        .catch(error => {
          console.error(error);
        });
      console.log("aaaa", xxx)
    },
  },
};
</script>
  

  