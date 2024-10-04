import { Product } from '@/types/product.type'

export interface OrderRequest {
  table_number: number
  customer_name: string
  customer_id: string
  assignee?: string
  products: { id: string; buy_count: number }[]
}

export type OrderStatusType = 'IN_PROGRESS' | 'COOKING' | 'REJECTED' | 'SERVED' | 'PAID'

export interface Order {
  _id: string
  table_number: number
  customer_name: string
  customer_id: string
  assignee?: string
  product: Product
  buy_count: number
  status: OrderStatusType
  createdAt: string
  updatedAt: string
}

export interface OrderListConfig {
  page?: number
  limit?: number
  tableNumber?: number
  customerName?: string
  status?: string
}

export interface TableStatistic {
  tableNumber: number
  cntInprogressOrder: number
  cntCookingOrder: number
  cntRejectedOrder: number
  cntServedOrder: number
  cntPaidOrder: number
}

export interface OrderStatistic {
  tables: TableStatistic[]
  orders: Order[]
  cntInprogressOrder: number
  cntCookingOrder: number
  cntRejectedOrder: number
  cntServedOrder: number
  cntPaidOrder: number
}
