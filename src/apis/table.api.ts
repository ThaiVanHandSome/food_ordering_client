import { SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const checkAvailableTable = (params: { table_number: string; token: string }) =>
  http.post<SuccessResponse<string>>('tables/check-available-table', null, {
    params
  })
