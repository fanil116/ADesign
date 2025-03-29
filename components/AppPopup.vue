<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="popup"
    >
      <div class="popup__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue'

const props = defineProps({
  isVisible: Boolean,
  time: Number,
})
const emit = defineEmits(['close'])

const localVisible = ref(props.isVisible)

watch(() => props.isVisible, (newVal) => {
  localVisible.value = newVal
  if (newVal) {
    setTimeout(() => {
      localVisible.value = false
      emit('close')
    }, props.time)
  }
})
</script>

<style scoped>

</style>
