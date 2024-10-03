import { Order, OrderRequest } from '@/types/order.type'
import { SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const addOrder = (body: OrderRequest) => http.post<SuccessResponse<string>>('orders/add', body)

export const getUserOrder = (params: { customer_id: string; customer_name: string; table_number: string }) =>
  http.get<SuccessResponse<Order[]>>('orders', {
    params
  })
