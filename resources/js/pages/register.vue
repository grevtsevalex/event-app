<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Зарегистрируйтесь</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit.prevent>
        <div>
          <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
          <div class="mt-2">
            <input id="login" name="login" type="text" v-model="login" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" v-model="pass" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="c_password" class="block text-sm font-medium leading-6 text-gray-900">Повторите пароль</label>
          </div>
          <div class="mt-2">
            <input id="c_password" name="c_password" v-model="c_pass" type="password" autocomplete="confirm-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="submitHandler" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Регистрация</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Есть аккаунт?
        {{ ' ' }}
        <router-link to="/auth"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Войти</a></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {AuthApi} from "../api/auth-api";
import {isEmailValid} from "../scripts/Validators";

export default defineComponent({
  data() {
    return {
      email: "",
      pass: "",
      c_pass: "",
      login: ""
    }
  },
  computed: {
    isEmailValid() {
      return isEmailValid(this.email)
    },
    isPassValid() {
      return (this.pass.length >= 4 && this.pass === this.c_pass)
    },
    isLoginValid() {
      return this.login.length > 4
    },
  },
  methods: {
    submitHandler() {
      if (!this.isPassValid || !this.isEmailValid || !this.isLoginValid) {
        return
      }

      (new AuthApi()).register(this.email, this.pass, this.c_pass, this.login)
          .then(data => {
            this.$store.commit('setIsAuthenticated', true)
            this.$store.commit('setUserId', data.id)
            window.location = '/'
      });
    },
  },
})
</script>
