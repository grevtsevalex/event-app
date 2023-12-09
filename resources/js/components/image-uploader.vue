<template>
    <div class="mt-2">
      <div class="flex items-center space-x-6">
        <div class="shrink-0">
          <img id='preview_img' class="h-40 w-40 object-cover rounded-full" :src="imageUrl" alt="Текущая картинка события" />
        </div>
        <label class="block">
          <span class="sr-only">Выберете картинку</span>
          <input name="image" id="image" type="file" @change="uploadImageHandler"
                 class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100"/>
        </label>
      </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    imageUrl: String
  },
  methods: {
    uploadImageHandler(event) {
      const output = document.getElementById('preview_img');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src)
      }

      this.$emit('previewReady', event);
    }
  },
})
</script>