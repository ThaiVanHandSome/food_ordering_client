import { ProductOrder } from '@/types/product.type'
import {
  getAccessTokenFromLocalStorage,
  getCustomerIdFromLocalStorage,
  getCustomerNameFromLocalStorage,
  getTableNumberFromLocalStorage
} from '@/utils/auth'
import { createContext, useState } from 'react'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  reset: () => void
  productOrders: ProductOrder[]
  setProductOrders: React.Dispatch<React.SetStateAction<ProductOrder[]>>
  customerName: string
  setCustomerName: React.Dispatch<React.SetStateAction<string>>
  tableNumber: string
  setTableNumber: React.Dispatch<React.SetStateAction<string>>
  customerId: string
  setCustomerId: React.Dispatch<React.SetStateAction<string>>,
  resetUser: () => void
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  setIsAuthenticated: () => null,
  reset: () => null,
  productOrders: [],
  setProductOrders: () => null,
  customerName: getCustomerNameFromLocalStorage(),
  setCustomerName: () => null,
  tableNumber: getTableNumberFromLocalStorage(),
  setTableNumber: () => null,
  customerId: getCustomerIdFromLocalStorage(),
  setCustomerId: () => null,
  resetUser: () => null,
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [productOrders, setProductOrders] = useState<ProductOrder[]>(initialAppContext.productOrders ?? [])
  const [customerName, setCustomerName] = useState<string>(initialAppContext.customerName)
  const [tableNumber, setTableNumber] = useState<string>(initialAppContext.tableNumber)
  const [customerId, setCustomerId] = useState<string>(initialAppContext.customerId)

  const reset = () => {
    setIsAuthenticated(false)
  }

  const resetUser = () => {
    setCustomerId('')
    setCustomerName('')
    setTableNumber('')
    localStorage.setItem('fd_customerId', '')
    localStorage.setItem('fd_customerName', '')
    localStorage.setItem('fd_tableNumber', '')
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        productOrders,
        setProductOrders,
        customerName,
        setCustomerName,
        tableNumber,
        setTableNumber,
        customerId,
        setCustomerId,
        reset,
        resetUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
