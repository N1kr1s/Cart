import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [{ cart, total, amount }, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'TOTAL_AMOUNT' })
  }, [cart])

  return (
    <AppContext.Provider
      value={{
        cart,
        total,
        amount,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
