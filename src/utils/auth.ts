export const AuthenticationTarget = new EventTarget()

export const clearLS = () => {
  localStorage.removeItem('fd_accessToken')
  localStorage.removeItem('fd_refreshToken')
  const clearLSEvent = new Event('clearLS')
  AuthenticationTarget.dispatchEvent(clearLSEvent)
}

export const setAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('fd_accessToken', accessToken)
}

export const setRefreshTokenToLocalStorage = (refreshToken: string) => {
  localStorage.setItem('fd_refreshToken', refreshToken)
}

export const getAccessTokenFromLocalStorage = (): string => {
  return localStorage.getItem('fd_accessToken') ?? ''
}

export const getRefreshTokenFromLocalStorage = (): string => {
  return localStorage.getItem('fd_refreshToken') ?? ''
}

export const setCustomerNameToLocalStorage = (customerName: string) => {
  localStorage.setItem('fd_customerName', customerName)
}

export const getCustomerNameFromLocalStorage = (): string => {
  return localStorage.getItem('fd_customerName') ?? ''
}

export const setTableNumberToLocalStorage = (tableNumber: string) => {
  localStorage.setItem('fd_tableNumber', tableNumber)
}

export const getTableNumberFromLocalStorage = (): string => {
  return localStorage.getItem('fd_tableNumber') ?? ''
}

export const setCustomerIdToLocalStorage = (customerId: string) => {
  localStorage.setItem('fd_customerId', customerId)
}

export const getCustomerIdFromLocalStorage = (): string => {
  return localStorage.getItem('fd_customerId') ?? ''
}