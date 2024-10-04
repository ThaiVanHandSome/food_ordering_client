import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { orderStatus } from '@/constants/orderStatus'
import { Order } from '@/types/order.type'
import { formatCurrency, formatDateTime } from '@/utils/utils'

interface Props {
  readonly orders?: Order[]
}

export default function OrderTable({ orders }: Props) {
  return (
    <Table className='font-semibold'>
      <TableHeader>
        <TableRow>
          <TableHead>Bàn</TableHead>
          <TableHead>Khách hàng</TableHead>
          <TableHead>Món ăn</TableHead>
          <TableHead>Trạng thái</TableHead>
          <TableHead>Người xử lý</TableHead>
          <TableHead>Tạo/Cập nhật</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order: Order) => (
          <TableRow key={order._id}>
            <TableCell>{order.table_number}</TableCell>
            <TableCell>
              {order.customer_name}(#{order.customer_id})
            </TableCell>
            <TableCell>
              <div className='flex items-center'>
                <img
                  src={order.product.image}
                  alt={order.product.name}
                  className='size-16 rounded-lg object-cover mr-2'
                />
                <div>
                  <p className='font-semibold flex items-center'>
                    {order.product.name}{' '}
                    <span className='p-1 flex items-center justify-center bg-secondary text-secondary-foreground text-sm rounded-full ml-1 '>
                      x{order.buy_count}
                    </span>
                  </p>
                  <p className='italic'>{formatCurrency(order.product.price)}đ</p>
                </div>
              </div>
            </TableCell>
            <TableCell>{orderStatus[order.status]}</TableCell>
            <TableCell>{order.assignee}</TableCell>
            <TableCell>
              <p>{formatDateTime(order.createdAt)}</p>
              <p>{formatDateTime(order.updatedAt)}</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
