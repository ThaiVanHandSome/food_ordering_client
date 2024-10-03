import { Category } from '@/types/category.type'

export interface Product {
  _id: string
  name: string
  description: string
  image: string
  status: string
  category: Category
  price: number
  view: number
  sold: number
}

export interface ProductOrder {
  product: Product
  buy_count: number
}
