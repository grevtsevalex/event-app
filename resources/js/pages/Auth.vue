<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Войдите в аккаунт</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit.prevent>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" v-model="pass" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="submitHandler" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Войти</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Еще не зарегистрировались?
        {{ ' ' }}
        <router-link to="/register"><a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Регистрация</a></router-link>
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
      pass: ""
    }
  },
  computed: {
    isEmailValid() {
      return isEmailValid(this.email)
    },
    isPassValid() {
      return this.pass.length >= 4
    },
  },
  methods: {
    submitHandler() {
      if (!this.isPassValid || !this.isEmailValid) {
        return
      }

      (new AuthApi()).emailAndPassAuthorization(this.email, this.pass).then(data => {
        if (data.data) {
          window.location = '/'
        }
      });
    },
  },
})
</script>
