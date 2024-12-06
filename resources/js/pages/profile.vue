<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Мой профиль</h2>
    </div>
    <form class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Имя</label>
          <div class="mt-2.5">
            <input v-model="name" id="first-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Фамилия</label>
          <div class="mt-2.5">
            <input v-model="lastName" id="last-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input v-model="email" id="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Телефон</label>
          <div class="mt-2.5">
            <input v-model="phone" v-mask="'+7 (###) ### - ## - ##'" id="phone-number" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="telegram" class="block text-sm font-semibold leading-6 text-gray-900">Телеграм логин</label>
          <div class="mt-2.5">
            <input v-model="telegram" id="telegram" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div class="mt-10 buttons flex">
        <button @click="saveUserClickHandler" :disabled="isLoading" class="relative flex justify-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Сохранить</span>
        </button>
        <button @click="clickHandler" class="ml-4 py-2.5 px-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">Выйти</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
}

.save-button {
  height: 2.5rem;
}

.exit-button {
  margin-left: 10px;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: calc(50% - 10px);
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script>
import { ref, computed, onMounted } from "vue";
import { AuthApi } from "../api/auth-api";
import { UserApi } from "../api/user-api";
import { mask } from 'vue-the-mask';

export default {
  directives: { mask },
  setup() {
    const userId = ref('');
    const name = ref('');
    const lastName = ref('');
    const phone = ref('');
    const telegram = ref('');
    const email = ref('');
    const isLoading = ref(false);

    const fetchUser = async () => {
      const res = await new UserApi().getUser();
      userId.value = res.id;
      name.value = res.name;
      lastName.value = res.last_name;
      phone.value = res.phone;
      telegram.value = res.telegram;
      email.value = res.email;
    };

    onMounted(fetchUser);

    const cleanPhoneNumber = (phoneNumber) => phoneNumber.replace(/\D/g, '');
    const cleanTgLogin = (login) => login.replace('@', '');

    const dataToSave = computed(() => {
      const data = {
        id: userId.value,
        name: name.value,
        last_name: lastName.value,
        phone: cleanPhoneNumber(phone.value),
        telegram: cleanTgLogin(telegram.value),
        email: email.value,
      };

      return Object.fromEntries(Object.entries(data).filter(([_, value]) => Boolean(value)));
    });

    const clickHandler = () => {
      new AuthApi().logout().then(() => {
        localStorage.removeItem('userId');
        localStorage.removeItem('ifh_duf1k');
        window.location = '/';
      });
    };

    const saveUserClickHandler = async () => {
      isLoading.value = true;
      await new UserApi().updateUser(dataToSave.value);
      isLoading.value = false;
    };

    return {
      userId,
      name,
      lastName,
      phone,
      telegram,
      email,
      clickHandler,
      saveUserClickHandler,
      isLoading,
    };
  }
};
</script>
