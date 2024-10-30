export interface User {
  _id: string
  avatar: string
  name: string
  email: string
  password: string
  role: string
}

export interface UserRequest {
  avatar: string
  name: string
  email: string
  password?: string
  role: string
}
