import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AppContext } from '@/contexts/app.context'
import { Product, ProductOrder } from '@/types/product.type'
import { formatCurrency } from '@/utils/utils'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'
import { produce } from 'immer'
import { toast } from '@/hooks/use-toast'

interface Props {
  readonly product: Product
}

export default function ProductCard({ product }: Props) {
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
      <Card className='rounded-lg shadow-md bg-muted text-muted-foreground'>
        <CardContent>
          <img src={product.image} alt={product.name} className='w-full h-64 object-cover rounded-md ' />
          <div className='px-4 py-6 '>
            <div className='flex items-center justify-between mb-3'>
              <h3 className=' text-lg font-semibold'>{product.name}</h3>
              <p className='text-xl font-bold text-red-700'>{formatCurrency(product.price)}đ</p>
            </div>
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
