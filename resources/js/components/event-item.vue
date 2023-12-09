<template>
    <li v-if="event" class="flex justify-between gap-x-6 py-5 event-item" @click="clickHandler">
      <div class="flex min-w-0 gap-x-4">
        <img v-if="imageUrl" class="h-12 w-12 flex-none rounded-full bg-gray-50" alt="" :src="imageUrl"/>
        <img v-else class="h-12 w-12 flex-none rounded-full bg-gray-50" alt="" src="../../images/def-event.jpg"/>
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
</template>
<style>
.event-item {
  cursor: pointer;
}
</style>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";
import {ImageApi} from "../api/image-api";

export default defineComponent({
  props: {
    event: null,
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  created() {
    this.loadImage();
  },
  methods: {
    clickHandler(eventId) {
      this.goToEventCard(eventId)
    },

    goToEventCard() {
      this.$router.push(`/event/${this.event.id}`)
    },

    loadImage() {
      if (!this.event.image_id) {
        return
      }

      new ImageApi().getImage(this.event.image_id)
          .then(image => {
            if (!image) {
              return
            }
            this.imageUrl = image.url
          })
    },
  },
})
</script>