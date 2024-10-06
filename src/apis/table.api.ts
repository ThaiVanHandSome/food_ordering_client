import { Table, TableRequest } from '@/types/table.type'
import { SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const checkAvailableTable = (params: { table_number: string; token: string }) =>
  http.post<SuccessResponse<string>>('tables/check-available-table', null, {
    params
  })

export const getAllTables = () => http.get<SuccessResponse<Table[]>>('tables')

export const addTable = (body: TableRequest) => http.post<SuccessResponse<string>>('tables', body)

export const updateTable = (id: string, body: TableRequest) => http.put<SuccessResponse<Table>>(`tables/${id}`, body)

export const deleteTable = (id: string) => http.delete<SuccessResponse<string>>(`tables/${id}`)
