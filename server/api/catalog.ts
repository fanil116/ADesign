import { generateFakeProduct } from '@/utils/generate'
export default defineEventHandler(() => {
    return Array.from({length: 12}, () => generateFakeProduct())
})