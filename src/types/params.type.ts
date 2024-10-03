export interface ProductListConfig {
  page?: number
  limit?: number
  name?: string
  categoryId?: string
  priceMin?: number
  priceMax?: number
  sortBy?: 'createdAt' | 'view' | 'sold' | 'price'
  order?: 'asc' | 'desc'
}
