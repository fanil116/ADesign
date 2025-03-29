<template>
  <div class="flex items-center justify-center h-screen text-center ">
    <div>
      <div class="mb-8 font-bold text-3xl flex items-center justify-center">
        <Icon name="material-symbols:shopping-basket-outline" class="mr-4 text-pink-600" /> {{ welcome }}
      </div>
      <div class="text-2xl ">
        {{ believe }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'
import { apiPath } from '~/utils/api'

const { welcome } = useApplicationStore()

const { believe } = await $fetch(apiPath.hello)
</script>
