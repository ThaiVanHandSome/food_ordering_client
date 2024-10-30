import { UserQueryConfig } from '@/hooks/useUserQueryConfig'
import { User, UserRequest } from '@/types/user.type'
import { PaginationResponse, SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const getUsers = (params: UserQueryConfig) =>
  http.get<SuccessResponse<PaginationResponse<User[]>>>('users', {
    params
  })

export const createUser = (body: UserRequest) =>
  http.post<SuccessResponse<string>>('users', body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

export const updateUser = (id: string, body: UserRequest) =>
  http.patch<SuccessResponse<string>>(`users/${id}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
