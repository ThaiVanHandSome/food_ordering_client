import ModeToggle from '@/components/dev/ModeToggle'
import OrderProductSheet from '@/components/dev/OrderProductSheet'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { path } from '@/constants/path'
import { AppContext } from '@/contexts/app.context'
import clsx from 'clsx'
import { ChefHat } from 'lucide-react'
import { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header() {
  const { tableNumber, customerName, resetUser } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navData = [
    { id: 1, title: 'Trang chủ', to: path.home, canAppear: true },
    { id: 2, title: 'Thực đơn', to: path.menu, canAppear: true },
    { id: 3, title: 'Đơn hàng', to: path.myOrder, canAppear: !!tableNumber && !!customerName }
  ]

  const navigate = useNavigate()
  const handleLogout = () => {
    resetUser()
    navigate(path.home)
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-header-height flex items-center justify-between px-12 shadow-lg border-b bg-background text-foreground'>
      <div>
        <ul className='flex items-center space-x-4'>
          <Link to={path.home}>
            <ChefHat className='size-9' />
          </Link>
          {navData.map(
            (navItem) =>
              navItem.canAppear && (
                <li key={navItem.id}>
                  <NavLink
                    to={navItem.to}
                    className={({ isActive }) =>
                      clsx('mx-2 text-md font-semibold hover:text-primary transition-colors', {
                        'text-primary': isActive
                      })
                    }
                  >
                    {navItem.title}
                  </NavLink>
                </li>
              )
          )}
          {!!tableNumber && !!customerName && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <li className='cursor-pointer text-md font-semibold hover:text-danger transition-colors'>Đăng xuất</li>
              </DialogTrigger>
              <DialogContent className='bg-background text-foreground rounded-lg p-6 shadow-lg max-w-sm'>
                <p className='text-center font-semibold mb-4'>Bạn có chắc chắn muốn đăng xuất?</p>
                <p className='text-center mb-4'>
                  Nếu bạn đăng xuất, bạn sẽ không còn được xem các trạng thái đơn hàng hiện tại của mình nữa, nhưng nhà
                  hàng vẫn sẽ phục vụ những món bạn đã đặt!
                </p>
                <div className='flex justify-around'>
                  <Button onClick={handleLogout}>Đăng xuất</Button>
                  <Button onClick={() => setIsOpen(false)} className='bg-gray-400 text-white hover:bg-gray-500'>
                    Hủy
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
        <ModeToggle />
        <OrderProductSheet />
      </div>
    </header>
  )
}
