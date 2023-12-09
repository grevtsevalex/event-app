<template>
  <form class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" v-on:submit.prevent>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-1100">Редактирование события</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Редактируйте информацию и сохраняйте ихменения.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Название события</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input v-model="title" type="text" name="title" id="title" autocomplete="Название события" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Открытие" />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Описание</label>
            <div class="mt-2">
              <textarea v-model="description" id="description" name="description" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
<!--            <p class="mt-3 text-sm leading-6 text-gray-600">Расскажите об этом мероприятии</p>-->
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Место и время проведения</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Расскажите куда и во сколько нужно прийти вашим гостям</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


          <div class="sm:col-span-3">
            <label for="dateTime" class="block text-sm font-medium leading-6 text-gray-900">Дата и время</label>
            <div class="mt-2">
              <input id="dateTime" name="dateTime" type="datetime-local" :autocomplete="dateTime" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="dateTime"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Адрес</label>
            <div class="mt-2">
              <input type="text" v-model="address" name="address" id="address" autocomplete="address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="image" class="block text-sm font-medium leading-6 text-gray-900">Картинка</label>
            <image-uploader :image-url="imageUrl" v-on:previewReady="uploadImageHandler"></image-uploader>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Отмена</button>
      <button type="button" @click="clickHandler" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Сохранить</button>
    </div>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import {EventApi} from "../api/event-api";
import {ImageApi} from "../api/image-api";
import {EventDescriptionApi} from "../api/event-description-api";
import {LoadingStatus} from "../scripts/constants.ts";
import ImageUploader from "../components/image-uploader.vue";

export default defineComponent({
  components: {ImageUploader},
  data() {
    return {
      title: "",
      address: "",
      dateTime: (new Date).toISOString(),
      description: "",
      imageId: "",
      eventId: "",
      descriptionId: "",
      imageUrl: null,
      eventApi: new EventApi(),
    }
  },
  async mounted() {
    this.eventId = Number(location.href.split('/').pop())
    this.eventApi.getEvent(this.eventId).then(res => {
      if (!res.success) {
        return
      }
      const event = res.data
      this.title = event.title
      this.address = event.address
      this.dateTime = event.date_time
      this.imageId = event.image_id
      this.descriptionId = event.description_id

      this.loadImage();
      this.loadDescription();
    });
  },
  computed: {
    isTitleValid() {
      return this.title.length > 0
    },
    isDateTimeValid() {
      return this.dateTime.length > 10
    },
    isAddressValid() {
      return this.address.length > 0
    },
    isImageIdValid() {
      return "" !== this.imageId;
    },
    isDataValid() {
      console.log(this.isTitleValid , this.isAddressValid , this.isDateTimeValid, this.userId)
      return (this.isTitleValid && this.isAddressValid && this.isDateTimeValid && this.userId)
    },
    userId() {
      return this.$store.getters.getUserId || localStorage.getItem('userId')
    },
  },
  methods: {
    async clickHandler() {
      if (!this.isDataValid) {
        return
      }

      // save description
      if (this.description.length) {
        this.descriptionId = await this.saveDescription(this.description)
      }

      this.updateEvent()
    },

    updateEvent() {
      const event = {
        title: this.title,
        date_time: this.dateTime,
        description_id: this.descriptionId,
        address: this.address
      }
      this.eventApi.updateEvent(this.eventId, event).then(res => {
        if (res.success) {
          if (this.descriptionId) {
            this.saveDescriptionToEvent(this.eventId, this.descriptionId)
          }

          if (this.isImageIdValid && this.eventId) {
            this.saveEventImage(this.eventId, this.imageId);
          }

          this.goToMyEvents()
        }
      });
    },
    goToMyEvents() {
      this.$router.push('/my-events/');
    },
    uploadImageHandler(event) {
      new ImageApi().uploadImage(event.target.files[0])
          .then(r => this.imageId = r.data.id)
          .catch(e => console.log(e))
    },

    saveDescription(description) {
      return new EventDescriptionApi().saveDescription(description).then(r => this.descriptionId = r.data)
    },

    saveDescriptionToEvent(eventId, descriptionId) {
      this.eventApi.saveDescriptionId(eventId, descriptionId)
    },

    saveEventImage(eventId, imageId) {
      this.eventApi.saveImageId(eventId,imageId)
    },

    loadDescription() {
      if (!this.descriptionId) {
        return
      }
      new EventDescriptionApi().getDescription(this.descriptionId).then(data => {
        this.description = data.data.description
      })
    },

    loadImage() {
      if (!this.imageId) {
        return
      }
      new ImageApi().getImage(this.imageId).then(image => {
        if (!image) {
          return
        }
        this.imageUrl = image.url
      })
    },
  },
})
</script>