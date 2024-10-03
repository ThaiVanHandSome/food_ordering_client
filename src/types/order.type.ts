import { Product } from '@/types/product.type'

export interface OrderRequest {
  table_number: number
  customer_name: string
  customer_id: string
  assignee?: string
  products: { id: string; buy_count: number }[]
}

type OrderStatusType = 'IN_PROGRESS' | 'COOKING' | 'REJECTED' | 'SERVED' | 'PAID'

export interface Order {
  table_number: number
  customer_name: string
  customer_id: string
  assignee?: string
  product: Product
  buy_count: number
  status: OrderStatusType
}
