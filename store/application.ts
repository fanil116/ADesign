import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { apiPath } from '~/utils/api'
import type { Product } from '@/types'
/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore('application', () => {
  const products: Ref<Product[]> = ref([])
  const lastUpdated: Ref<number | null> = ref(null)
  const cacheTime = 5 * 60 * 1000 // 5 минут

  const loadProducts = async () => {
    const now = Date.now()

    if (lastUpdated.value && now - lastUpdated.value < cacheTime) {
      console.log('Используем кешированные данные')
      return
    }
    console.log('Загружаем новые')
    try {
      products.value = await $fetch<Product[]>(apiPath.catalog)
      lastUpdated.value = now
      // Сохраняем данные в localStorage
      localStorage.setItem('products', JSON.stringify(products.value))
      localStorage.setItem('lastUpdated', String(lastUpdated.value))
    }
    catch (error) {
      console.error(error)
    }
  }

  const initStore = () => {
    const cachedProducts = localStorage.getItem('products')
    const cachedTime = localStorage.getItem('lastUpdated')

    if (cachedProducts && cachedTime) {
      products.value = JSON.parse(cachedProducts)
      lastUpdated.value = Number(cachedTime)
    }
    loadProducts()
  }

  return { products, loadProducts, initStore }
})
