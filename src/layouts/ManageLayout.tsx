import ManageHeader from '@/components/dev/ManageHeader'
import { path } from '@/constants/path'
import clsx from 'clsx'
import { ShoppingCartIcon } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ManageLayout() {
  return (
    <div>
      <ManageHeader />
      <div>
        <div className='fixed top-0 mt-[var(--header-height)] left-0 h-[100vh] w-14 flex flex-col items-center pt-4'>
          <NavLink
            to={path.manageOrder}
            className={({ isActive }) =>
              clsx('inline-block p-2 rounded-md', {
                'bg-secondary text-secondary-foreground': isActive,
                'hover:bg-secondary hover:text-secondary-foreground': !isActive
              })
            }
          >
            <ShoppingCartIcon />
          </NavLink>
        </div>
        <div className='ml-14 px-4 py-2'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
