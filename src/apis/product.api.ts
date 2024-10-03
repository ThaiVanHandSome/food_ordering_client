import { QueryConfig } from '@/hooks/useQueryConfig'
import { Product } from '@/types/product.type'
import { PaginationResponse, SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const getProducts = (params: QueryConfig) =>
  http.get<SuccessResponse<PaginationResponse<Product[]>>>('products', {
    params
  })
