<template>
<event-list :get-events-method="getUserEventsMethod"></event-list>
</template>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";
import EventList from "../components/event-list.vue";

export default defineComponent({
  components: {EventList},
  data() {
    return {
      getUserEventsMethod: () => new EventApi().getEventsByAuthorId(localStorage.getItem('userId'))
    }
  },
})
</script>