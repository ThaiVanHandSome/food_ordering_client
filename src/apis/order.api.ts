import { OrderQueryConfig } from '@/hooks/useOrderQueryConfig'
import { Order, OrderRequest, OrderStatistic } from '@/types/order.type'
import { PaginationResponse, SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const addOrder = (body: OrderRequest) => http.post<SuccessResponse<string>>('orders/add', body)

export const getUserOrder = (params: { customer_id: string; customer_name: string; table_number: string }) =>
  http.get<SuccessResponse<Order[]>>('orders', {
    params
  })

export const getStatistics = (params: OrderQueryConfig) =>
  http.get<SuccessResponse<PaginationResponse<OrderStatistic>>>('orders/statistics', {
    params
  })
