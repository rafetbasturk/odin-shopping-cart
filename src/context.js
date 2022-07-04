import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([]);

  const addToCart = e => {
    e.preventDefault()
    e.stopPropagation()
    const id = Number(e.target.parentElement.dataset.id);
    const match = cart.filter(item => item.id === id)[0]
    if (match) {
      match.count++
      setCart(cart.map(item => item.id === id ? match : item))
    }
    else {
      const product = items.filter(item => item.id === id)[0]
      setCart([...cart, product])
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const quantity = Number(e.target.quantity.value);
    const id = Number(e.target.parentElement.parentElement.dataset.id)
    const match = cart.filter(item => item.id === id)[0]
    if (match) {
      match.count += quantity
      setCart(cart.map(item => item.id === id ? match : item))
    }
    else {
      const product = items.filter(item => item.id === id)[0]
      product.count = quantity
      setCart([...cart, product])
    }
  }

  useEffect(() => {
    setIsLoading(true)
    try {
      const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
          .then(response => response.json())
        const products = data.products.map(product => {
          return {
            ...product,
            count: 1
          }
        })
        setItems(products)
        setIsLoading(false)
      }
      fetchData()
    }
    catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        items,
        cart,
        handleSubmit,
        addToCart,
        setCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }