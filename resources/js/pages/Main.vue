<template>
  <ul role="list" class="divide-y divide-gray-100 events-list">
    <li v-for="event in events" :key="event.id" class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ event.title }}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ event.address }}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">{{ event.address }}</p>
        <p class="mt-1 text-xs leading-5 text-gray-500">
          Дата и время: <time :datetime="event.date_time">{{ event.date_time }}</time>
        </p>
      </div>
    </li>
  </ul>
</template>
<style>
.events-list {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";

export default defineComponent({
  data() {
    return {
      events: [],
    }
  },
  mounted() {
    new EventApi().getAllEvents().then(data => this.events = data.data);
  }
})
</script>