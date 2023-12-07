<template>
  <div class="event-card bg-white" v-if="event">
    <button v-if="isMyEvent" type="button" @click="editButtonClickHandler" class="edit-button rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Редактировать</button>
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ event.title }}</h2>
        <p class="mt-4 text-gray-500">{{ description }}</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Дата события:</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ event.date_time }}</dd>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Адрес:</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ event.address }}</dd>
          </div>
        </dl>
      </div>
      <div v-if="imageUrl" class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img :src="imageUrl" alt="Картинка мероприятия" class="rounded-lg bg-gray-100" />
        <img :src="imageUrl"  alt="Картинка мероприятия" class="rounded-lg bg-gray-100" />
        <img :src="imageUrl"  alt="Картинка мероприятия" class="rounded-lg bg-gray-100" />
        <img :src="imageUrl" alt="Картинка мероприятия" class="rounded-lg bg-gray-100" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
}
.edit-button {
  align-self: flex-end;
  margin-right: 2em;
}
</style>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";
import {EventDescriptionApi} from "../api/event-description-api";
import {ImageApi} from "../api/image-api";
import {LoadingStatus} from "../scripts/constants.ts";
import store from "../store";
export default defineComponent({

  data() {
    return {
      event: null,
      imageUrl: '',
      loading: LoadingStatus.NOT_LOADED,
      description: '',
    }
  },
  mounted() {
    this.loading = LoadingStatus.LOADING;

    new EventApi().getEvent(Number(this.eventId)).then(res => {
      if (!res.success) {
        this.loading = LoadingStatus.ERROR_LOADED;
      }
      this.event = res.data
      this.loading = LoadingStatus.SUCCESS_LOADED;
    })
        .catch(() => this.loading = LoadingStatus.ERROR)
  },
  computed: {
    eventId() {
      return location.href.split('/').pop()
    },
    isAuthenticated() {
      return this.$store.getters.getIsAuthenticated
    },
    isMyEvent() {
      return this.isAuthenticated && (this.event.author_id === this.userId)
    },
    userId() {
      return Number(this.$store.getters.getUserId || localStorage.getItem('userId'));
    },
  },
  methods: {
    loadDescription() {
      if (!this.event.description_id) {
        return
      }
      new EventDescriptionApi().getDescription(this.event.description_id).then(data => {
        this.description = data.data.description
      })
    },
    loadImage() {
      if (!this.event.image_id) {
        return
      }
      new ImageApi().getImage(this.event.image_id).then(image => {
        if (!image) {
          return
        }
        this.imageUrl = image.url
      })
    },
    editButtonClickHandler() {
      this.goToEditPage()
    },
    goToEditPage() {
      this.$router.push(`/edit-event/${this.event.id}`)
    },
  },
  watch: {
    loading(status) {
      if (status === LoadingStatus.SUCCESS_LOADED) {
        this.loadDescription()
        this.loadImage()
      }
    },
  },
})
</script>