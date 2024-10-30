import ManageHeader from '@/components/dev/ManageHeader'
import { path } from '@/constants/path'
import { AppContext } from '@/contexts/app.context'
import clsx from 'clsx'
import { Cookie, Layers3Icon, ShoppingCartIcon, TableIcon, User } from 'lucide-react'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ManageLayout() {
  const { user } = useContext(AppContext)
  const navData = [
    {
      icon: <ShoppingCartIcon />,
      path: path.manageOrder,
      canShow: true
    },
    {
      icon: <TableIcon />,
      path: path.manageTable,
      canShow: user?.role === 'ADMIN'
    },
    {
      icon: <Layers3Icon />,
      path: path.manageCategory,
      canShow: user?.role === 'ADMIN'
    },
    {
      icon: <Cookie />,
      path: path.manageFood,
      canShow: user?.role === 'ADMIN'
    },
    {
      icon: <User />,
      path: path.manageUser,
      canShow: user?.role === 'ADMIN'
    }
  ]
  return (
    <div>
      <div>
        <div className='fixed top-0 left-0 h-[100vh] w-14 flex flex-col items-center pt-4'>
          {navData.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx('inline-block p-2 rounded-md mb-3', {
                  'bg-secondary text-secondary-foreground': isActive,
                  'hover:bg-secondary hover:text-secondary-foreground': !isActive,
                  hidden: !item.canShow
                })
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
        <div className='ml-14'>
          <ManageHeader />
          <div className='px-4 py-2'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
