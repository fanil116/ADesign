<template>
    <header class="shadow-xl px-10 py-7">
      <div class="flex justify-between">
        <div class="text-3xl font-bold">
          Brand Name
        </div>
        <div class="flex items-center cursor-pointer">
          <Icon
            name="material-symbols:shopping-basket-outline"
            class="mr-4 header__icon"
          />
          <div class="text-sm mr-21">
            12 товаров
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts"></script>
  <style scoped>
    .header__icon {
        width: 32px;
        height: 32px;
    }
    </style>
  