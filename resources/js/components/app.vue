<template>
  <Header></Header>
  <router-view/>
</template>

<script>
import Header from "./header.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Header}
})

</script>
