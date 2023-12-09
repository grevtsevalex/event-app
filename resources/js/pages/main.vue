<template>
<event-list :get-events-method="getEventsMethod"></event-list>
</template>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";
import EventList from "../components/event-list.vue";

export default defineComponent({
  components: {EventList},
  data() {
    return {
      getEventsMethod: new EventApi().getAllEvents,
    }
  }
})
</script>