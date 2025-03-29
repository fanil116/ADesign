<template>
  <div
    class="relative group transition-transform duration-300 ease-in-out"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <img
      :src="props.item.image"
      alt=""
      class="h-[201px] w-[201px] rounded-lg object-cover"
    >

    <div
      v-if="props.item.oldPrice && props.item.newPrice"
      class="text-pink-600 text-xs bg-white rounded-md product-card__item-discount"
    >
      -{{ calculateDiscount(props.item.oldPrice, props.item.newPrice) }}%
    </div>

    <div class="flex items-end mt-3">
      <p class="font-bold text-base">
        {{ format(props.item.newPrice) }}
      </p>
      <p
        v-if="props.item.oldPrice"
        class="ml-1 line-through text-gray-300 text-xs leading-5"
      >
        {{ format(props.item.oldPrice) }}
      </p>
    </div>

    <div class="text-xs font-semibold mb-1">
      {{ props.item.brand }}
    </div>

    <div class="text-sm line-clamp-2 overflow-hidden text-ellipsis product-card__item-name">
      {{ props.item.name }}
    </div>
    <div
      v-if="isHovered"
      class="product-card__wrapper rounded-md absolute -bottom-10 left-0 mt-3"
    >
      <button
        class="cursor-pointer text-xs py-3 px-6 bg-black text-white rounded-md product-card__item-btn"
        @click="addCard"
      >
        В корзину
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types'

const props = defineProps({
  item: {
    type: Object as PropType<Product>,
    required: true,
  },
})

const isHovered = ref(false)

const onMouseEnter = () => {
  isHovered.value = true
}

const onMouseLeave = () => {
  isHovered.value = false
}

const addCard = () => {
  console.log("add")
}
function format(price: number) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  })
}
const calculateDiscount = (oldPrice: number, newPrice: number) => {
  if (!oldPrice || !newPrice || oldPrice === 0) return 0
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100)
}
</script>
<style lang="css" scoped>
.product-card__item-discount {
    position: absolute;
    left: 12px;
    bottom: 10px;
    padding: 3px 5px;
}

.product-card__item-name {
    max-width: 200px;
}

.product-card__item-btn {
    max-width: 120px;
}

.group {
    transition: transform 0.3s ease;
    position: relative;
  }
  
  .group:hover {
    transform: scale(1.1); 
    z-index: 10; 
  }
  .product-card__wrapper {
    background: #fff;
    width: 100%;
  }
</style>
