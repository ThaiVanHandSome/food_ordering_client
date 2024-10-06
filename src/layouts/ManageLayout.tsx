import ManageHeader from '@/components/dev/ManageHeader'
import { path } from '@/constants/path'
import clsx from 'clsx'
import { ShoppingCartIcon, TableIcon } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

const navData = [
  {
    icon: <ShoppingCartIcon />,
    path: path.manageOrder
  },
  {
    icon: <TableIcon />,
    path: path.manageTable
  }
]

export default function ManageLayout() {
  return (
    <div>
      <ManageHeader />
      <div>
        <div className='fixed top-0 mt-[var(--header-height)] left-0 h-[100vh] w-14 flex flex-col items-center pt-4'>
          {navData.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx('inline-block p-2 rounded-md mb-3', {
                  'bg-secondary text-secondary-foreground': isActive,
                  'hover:bg-secondary hover:text-secondary-foreground': !isActive
                })
              }
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
        <div className='ml-14 px-4 py-2'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
