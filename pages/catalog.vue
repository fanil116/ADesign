<template>
    <div class="flex-1 px-10">
      <div class="text-3xl font-bold mt-8 mb-6">
        Тестовая задача
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useApplicationStore } from '@/store/application'
  
  const store = useApplicationStore()
  onMounted(() => {
    store.initStore()
  })
  </script>
  