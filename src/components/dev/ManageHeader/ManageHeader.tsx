import AvatarCustom from '@/components/dev/AvatarCustom'
import ModeToggle from '@/components/dev/ModeToggle'

export default function ManageHeader() {
  return (
    <header className='h-header-height flex justify-end items-center px-8 border-b shadow-lg z-50'>
      <div className='flex items-center space-x-2'>
        <ModeToggle />
        <AvatarCustom />
      </div>
    </header>
  )
}
