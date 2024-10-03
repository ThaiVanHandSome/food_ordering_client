import { path } from '@/constants/path'
import { AppContext } from '@/contexts/app.context'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Menu from '@/pages/Menu'
import MyOrder from '@/pages/MyOrder'
import Table from '@/pages/Table'
import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: path.menu,
      index: true,
      element: (
        <MainLayout>
          <Menu />
        </MainLayout>
      )
    },
    {
      path: path.table,
      index: true,
      element: (
        <MainLayout>
          <Table />
        </MainLayout>
      )
    },
    {
      path: path.myOrder,
      index: true,
      element: (
        <MainLayout>
          <MyOrder />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
