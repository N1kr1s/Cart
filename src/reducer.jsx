const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] }

    case 'REMOVE': {
      const cart = state.cart.filter((item) => item.id !== action.payload)
      return { ...state, cart }
    }

    case 'INCREASE': {
      const cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      )
      return { ...state, cart }
    }

    case 'DECREASE': {
      let cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        } else {
          return item
        }
      })
      cart = cart.filter((item) => item.amount !== 0)
      return { ...state, cart }
    }

    case 'TOTAL_AMOUNT': {
      const amount = state.cart.reduce((acc, next) => {
        return acc + next.amount
      }, 0)
      const total = state.cart.reduce((acc, next) => {
        return Math.round((acc + next.price * next.amount) * 100) / 100
      }, 0)
      return { ...state, amount, total }
    }

    default:
      return state
  }
}

export default reducer
