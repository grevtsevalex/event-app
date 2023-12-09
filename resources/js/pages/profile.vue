<template>
  <button type="button" @click="clickHandler" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Выйти</button>
</template>
<script>
import {AuthApi} from "../api/auth-api";
import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    clickHandler() {
      new AuthApi().logout().then(() => {
        this.$store.commit('setIsAuthenticated', false);
        localStorage.removeItem('userId')
        window.location = '/'
      })
    },
  },
})
</script>