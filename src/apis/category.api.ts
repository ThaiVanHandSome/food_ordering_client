import { Category } from '@/types/category.type'
import { SuccessResponse } from '@/types/utils.type'
import http from '@/utils/http'

export const getAllCategories = () => http.get<SuccessResponse<Category[]>>('/categories')
