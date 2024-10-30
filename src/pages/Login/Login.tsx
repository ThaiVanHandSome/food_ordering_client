import { login } from '@/apis/auth.api'
import InputCustom from '@/components/dev/Form/InputCustom'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { path } from '@/constants/path'
import { AppContext } from '@/contexts/app.context'
import { setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage, setUserToLocalStorage } from '@/utils/auth'
import { LoginSchema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

type FormData = yup.InferType<typeof LoginSchema>

export default function Login() {
  const { setIsAuthenticated, setUser } = useContext(AppContext)
  const form = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(LoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: { email: string; password: string }) => login(body)
  })

  const navigate = useNavigate()
  const onSubmit = form.handleSubmit((values) => {
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        setIsAuthenticated(true)
        setUser(res.data.data.user)
        setUserToLocalStorage(res.data.data.user)
        setAccessTokenToLocalStorage(res.data.data.accessToken)
        setRefreshTokenToLocalStorage(res.data.data.refreshToken)
        navigate(path.manageOrder)
      }
    })
  })

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='hidden md:block md:w-7/12'>
        <img
          src='https://th.bing.com/th/id/R.26f677899cb906831538311cac52504e?rik=s0GOw2btDQt1tQ&pid=ImgRaw&r=0'
          alt='banner'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex w-full md:w-5/12 items-center justify-center bg-white'>
        <div className='w-full max-w-md px-6 py-8'>
          <h1 className='mb-6 text-center text-3xl font-semibold text-gray-800'>Đăng Nhập</h1>
          <Form {...form}>
            <form onSubmit={onSubmit} className='space-y-5'>
              <InputCustom control={form.control} name='email' placeholder='Email' label='Email' />
              <InputCustom
                type='password'
                control={form.control}
                name='password'
                placeholder='Mật khẩu'
                label='Mật khẩu'
              />
              <Button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-200'>
                Đăng nhập
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
