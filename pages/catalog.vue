<template>
  <div class="flex-1 px-10">
    <div class="text-3xl font-bold mt-8 mb-6">
      Тестовая задача
    </div>
    <div class="flex gap-8 flex-wrap">
      <div
        v-for="(item, index) in store.products"
        :key="index"
      >
        <product-card
          :item="item"
          @show-popup="showPopup"
        />
      </div>
    </div>
    <Teleport to="body">
      <app-popup
        class="fixed bottom-30 right-10"
        :is-visible="isVisible"
        :time="2000"
        @close="closePopup"
      >
        <p>Add to cart</p>
      </app-popup>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useApplicationStore } from '@/store/application'

const store = useApplicationStore()
const isVisible = ref(false)
const closePopup = function () {
  isVisible.value = false
}
const showPopup = function () {
  console.log('show')
  isVisible.value = true
}
onMounted(() => {
  store.initStore()
})
</script>
