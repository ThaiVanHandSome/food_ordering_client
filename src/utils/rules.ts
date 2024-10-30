import * as yup from 'yup'

function testPriceMin(this: yup.TestContext<yup.AnyObject>) {
  const { priceMin, priceMax } = this.parent

  if (priceMin === '' || priceMin === undefined) {
    return true
  }

  const maxValue = Number(priceMax)

  if (priceMin !== '' && priceMin !== undefined) {
    const minValue = Number(priceMin)
    return !isNaN(maxValue) && maxValue >= minValue
  }

  return !isNaN(Number(priceMin))
}

function testPriceMax(this: yup.TestContext<yup.AnyObject>) {
  const { priceMin, priceMax } = this.parent

  if (priceMax === '' || priceMax === undefined) {
    return true
  }

  const maxValue = Number(priceMax)

  if (priceMin !== '' && priceMin !== undefined) {
    const minValue = Number(priceMin)
    return !isNaN(maxValue) && maxValue >= minValue
  }

  return !isNaN(maxValue)
}

export const PriceSchema = yup.object({
  priceMin: yup.string().test({
    name: 'price-min-validate',
    message: 'Giá tối thiểu không hợp lệ',
    test: testPriceMin
  }),
  priceMax: yup.string().test({
    name: 'price-max-validate',
    message: 'Giá tối đa không hợp lệ hoặc nhỏ hơn giá tối thiểu',
    test: testPriceMax
  })
})

export const FilterSchema = yup.object({
  name: yup.string(),
  order: yup.string()
})

export const LoginToOrderSchema = yup.object({
  name: yup.string().required('Bạn phải nhập tên')
})

export const AddTableSchema = yup.object({
  tableNumber: yup.string().required('Bạn phải nhập bàn'),
  capacity: yup.string().required('Bạn phải nhập sức chứa'),
  token: yup.string().required('Bạn phải nhập token'),
  status: yup.string()
})

export const ProductSchema = yup.object({
  name: yup.string().required('Bạn phải nhập tên'),
  categoryId: yup.string().required('Bạn phải chọn danh mục'),
  description: yup.string().required('Bạn phải nhập mô tả'),
  price: yup.string().required('Bạn phải nhập giá'),
  status: yup.string().required('Bạn phải chọn trạng thái')
})

export const UserSchema = yup.object({
  name: yup.string().required('Bạn phải nhập tên'),
  email: yup.string().required('Bạn phải nhập email').email(),
  role: yup.string().required('Bạn phải chọn role'),
  password: yup.string().required('Bạn phải nhập mật khẩu')
})

export const LoginSchema = yup.object({
  email: yup.string().required('Bạn phải nhập email').email(),
  password: yup.string().required('Bạn phải nhập mật khẩu')
})
