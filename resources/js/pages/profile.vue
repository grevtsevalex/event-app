<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Мой профиль</h2>
<!--      <p class="mt-2 text-lg leading-8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>-->
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Имя</label>
          <div class="mt-2.5">
            <input type="text" v-model="name" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Фамилия</label>
          <div class="mt-2.5">
            <input type="text" v-model="lastName" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Телефон</label>
          <div class="relative mt-2.5">
            <input type="tel" v-model="phone" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="telegram" class="block text-sm font-semibold leading-6 text-gray-900">Телеграм логин</label>
          <div class="relative mt-2.5">
            <input type="text" v-model="telegram" name="telegram" id="telegram" placeholder="tglogin" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-10 buttons">
        <button type="button" @click="saveUserClickHandler" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Сохранить</button>
        <button type="button" @click="clickHandler" class="exit-button py-2.5 px-3.5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Выйти</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .buttons {
    display: flex;
    align-items: baseline;
    justify-content: end;
  }

  .exit-button {
    margin-left: 10px;
  }

</style>
<script>
import {AuthApi} from "../api/auth-api";
import {defineComponent} from "vue";
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import {UserApi} from "../api/user-api";

export default defineComponent({
  components: {
    ChevronDownIcon,
    Switch,
    SwitchGroup,
    SwitchLabel
  },
  data() {
    return {
      userId: '',
      name: '',
      lastName: '',
      phone: '',
      telegram: '',
      email: '',
    }
  },
  created() {
    new UserApi().getUser().then(res => {
      this.userId = res.id
      this.name = res.name
      this.lastName = res.last_name
      this.phone = res.phone
      this.telegram = res.telegram
      this.email = res.email
    });
  },
  computed: {
    dataToSave() {
      const data = {
        id: this.userId,
        name: this.name,
        last_name: this.lastName,
        phone: this.phone,
        telegram: this.telegram,
        email: this.email
      };

      const asArray = Object.entries(data);
      const filtered = asArray.filter(([key, value]) => Boolean(value));
      return Object.fromEntries(filtered);
    }
  },
  methods: {
    clickHandler() {
      new AuthApi().logout().then(() => {
        this.$store.commit('setIsAuthenticated', false);
        localStorage.removeItem('userId')
        localStorage.removeItem('ifh_duf1k')
        window.location = '/'
      })
    },
    saveUserClickHandler() {
      new UserApi().updateUser(this.dataToSave);
    },
  },
})
</script>

