import OrderProductSheet from '@/components/dev/OrderProductSheet'
import { Toaster } from '@/components/ui/toaster'
import useRouteElement from '@/hooks/useRouteElement'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const routes = useRouteElement()
  return (
    <div className='relative'>
      {routes} <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </div>
  )
}

export default App
