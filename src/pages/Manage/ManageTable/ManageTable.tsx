import { getAllTables } from '@/apis/table.api'
import InputCustom from '@/components/dev/Form/InputCustom'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import DialogTable from '@/pages/Manage/ManageTable/components/DialogTable'
import TableDataTable from '@/pages/Manage/ManageTable/components/TableDataTable'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export default function ManageTable() {
  const form = useForm({
    defaultValues: {
      tableNumber: ''
    }
  })

  const { data: tables } = useQuery({
    queryKey: ['tables'],
    queryFn: getAllTables
  })

  return (
    <div>
      <div className='mb-8 flex items-center justify-between'>
        <div>
          <p className='text-lg font-bold mb-1'>Bàn ăn</p>
          <p className='text-sm italic'>Quản lý bàn ăn</p>
        </div>
        <div>
          <DialogTable />
        </div>
      </div>
      <Form {...form}>
        <form>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
              <InputCustom control={form.control} name='tableNumber' placeholder='Nhập số bàn để tìm kiếm' />
            </div>
            <Button className='col-span-1'>Tìm kiếm</Button>
          </div>
        </form>
      </Form>
      <Separator className='my-2' />
      {tables?.data.data && <TableDataTable tables={tables?.data.data} />}
    </div>
  )
}
