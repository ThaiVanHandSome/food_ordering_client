import { toast } from '@/hooks/use-toast'
import { getAccessTokenFromLocalStorage, getRefreshTokenFromLocalStorage } from '@/utils/auth'
import axios, { AxiosError, AxiosInstance } from 'axios'

class HTTP {
  instance: AxiosInstance
  access_token: string
  refresh_token: string
  refreshTokenRequest: Promise<string> | null

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/',
      timeout: 100000
    })

    this.access_token = getAccessTokenFromLocalStorage()
    this.refresh_token = getRefreshTokenFromLocalStorage()
    this.refreshTokenRequest = null

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          config.headers.Authorization = 'Bearer ' + this.access_token
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = error.response?.data
        toast({
          variant: 'destructive',
          description: data?.message || error?.message
        })
      }
    )
  }
}

const http = new HTTP().instance
export default http
