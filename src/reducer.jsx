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
        item.id === action.payload ? { ...item, amount: item.amount++ } : item
      )
      return { ...state, cart }
    }

    case 'DECREASE': {
      let cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount-- }
        } else {
          return item
        }
      })
      cart = cart.filter((item) => item.amount !== 0)
      return { ...state, cart }
    }

    default:
      return state
  }
}

export default reducer
