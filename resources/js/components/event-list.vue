<template>
  <ul role="list" class="divide-y divide-gray-100 events-list">
    <event-item v-for="event in events" :key="event.id" :event="event"></event-item>
  </ul>
</template>
<style>
.events-list {
  padding: 0 4rem 0 4rem;
}
</style>

<script>
import {defineComponent} from "vue";
import EventItem from "./event-item.vue";

export default defineComponent({
  components: {EventItem},
  props: {
    getEventsMethod: Function,
  },
  data() {
    return {
      events: [],
    }
  },
  async mounted() {
    const data = await this.getEventsMethod();
    this.events = data.data;
  },
})
</script>