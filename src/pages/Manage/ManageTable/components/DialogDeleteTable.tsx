import { deleteTable } from '@/apis/table.api'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { toast } from '@/hooks/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

interface Props {
  readonly table_id: string
}

export default function DialogDeleteTable({ table_id }: Props) {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState<boolean>(false)

  const deleteTableMutation = useMutation({
    mutationFn: (id: string) => deleteTable(id)
  })

  const handleDelete = () => {
    deleteTableMutation.mutate(table_id, {
      onSuccess: (res) => {
        toast({
          description: res.data.message
        })
        queryClient.invalidateQueries({
          queryKey: ['tables']
        })
        setOpen(false)
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant='destructive' className='w-full'>
          Xóa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <p>Bạn có chắc chắn muốn xóa bàn ăn này?</p>
        <div>
          <Button variant='destructive' className='mr-4' onClick={handleDelete}>
            Xóa
          </Button>
          <Button>Hủy</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
