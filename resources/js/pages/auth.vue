<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-16 w-auto" src="../../images/logo.jpg" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Войдите в аккаунт</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submitHandler">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div class="mt-2">
            <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
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
            <input
                id="password"
                name="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
              @click="submitHandler"
              :disabled="isLoading"
              class="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading" class="loader"></span>
            <span v-if="!isLoading">Войти</span>
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Еще не зарегистрировались?
        <router-link to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Регистрация</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { AuthApi } from "../api/auth-api";
import { isEmailValid } from "../scripts/Validators";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);

    const isEmailValidComputed = computed(() => isEmailValid(email.value));
    const isPasswordValidComputed = computed(() => password.value.length >= 4);

    const submitHandler = async () => {
      if (!isEmailValidComputed.value || !isPasswordValidComputed.value) {
        return;
      }

      isLoading.value = true;

      try {
        const authApi = new AuthApi();
        const data = await authApi.emailAndPassAuthorization(email.value, password.value);

        if (data.data) {
          localStorage.setItem("userId", data.data.id);
          localStorage.setItem("ifh_duf1k", data.data.token);
          window.location = "/";
        }
      } catch (error) {
        console.error("Login failed", error);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      isLoading,
      isEmailValid: isEmailValidComputed,
      isPasswordValid: isPasswordValidComputed,
      submitHandler,
    };
  },
};
</script>

<style>
/* Лоадер с фиксированной высотой */
.loader {
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: spin 0.8s linear infinite;
  margin-right: 0.5rem;
}

/* Высота кнопки фиксирована, даже если текст меняется */
button {
  min-height: 2.5rem; /* Соответствует px-3 py-1.5 */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
