import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AppContext } from '@/contexts/app.context'
import { Product, ProductOrder } from '@/types/product.type'
import { formatCurrency } from '@/utils/utils'
import { FlameIcon, ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'
import { produce } from 'immer'
import { toast } from '@/hooks/use-toast'

interface Props {
  readonly product: Product
  readonly isBestSeller?: boolean
}

export default function ProductCard({ product, isBestSeller = false }: Props) {
  const { setProductOrders, tableNumber } = useContext(AppContext)
  const canOrder = !!tableNumber

  const handleAddProductToCart = () => {
    setProductOrders((prev) =>
      produce(prev, (draft: ProductOrder[]) => {
        const existProduct = draft?.find((obj) => obj.product._id === product._id)
        if (existProduct) {
          existProduct.buy_count += 1
        } else {
          draft.push({ product, buy_count: 1 })
        }
      })
    )
    toast({
      description: 'Thêm sản phẩm vào giỏ hàng thành công'
    })
  }

  return (
    <div>
      <Card className='relative rounded-lg shadow-md bg-muted text-muted-foreground'>
        {isBestSeller && (
          <span className='absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full space-x-1 flex items-center flame-animation'>
            <FlameIcon className='size-4' /> Bán Chạy
          </span>
        )}
        <CardContent>
          <img src={product.image} alt={product.name} className='w-full h-64 object-cover rounded-md' />
          <div className='px-4 py-6'>
            <h3 className='text-lg font-semibold mb-1'>{product.name}</h3>
            <h3 className='text-sm font-semibold mb-2 truncate'>{product.description}</h3>
            <p className='text-xl font-bold text-red-700 mb-2'>{formatCurrency(product.price)}đ</p>
            {canOrder && (
              <Button className='w-full' onClick={handleAddProductToCart}>
                <ShoppingCartIcon className='size-5 mr-2' />
                <span>Thêm vào giỏ</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
