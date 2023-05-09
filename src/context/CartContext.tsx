import { createContext, useEffect, useState } from "react";

interface Product {
  name: string,
  price: string,
  imgUrl: string,
  id: string,
  amount: number,
}

interface CartProviderProps {
  children: React.ReactNode
}

interface CartContext {
  addProductInCart: (product: Product) => void,
  productsInCart: Product[],
  deleteProduct: (product: string) => void,
  amountValue: number,
  itensAmount: number,
}

export const CartContext = createContext({} as CartContext)

export function CartProvider({ children }: CartProviderProps) {
  const [productsInCart, setProductsInCart] = useState<Product[]>([])
  const [amountValue, setAmountValue] = useState(0)
  const [itensAmount, setItensAmount] = useState(0)

  useEffect(() => {
    let total = 0

    productsInCart.forEach((product) => {
      total += product.amount
    })
    
    setItensAmount(total)
  }, [productsInCart])
  

  useEffect(() => {
    let total = 0

    productsInCart.forEach((product) => {
      total += parseInt(product.price) * product.amount
    })

    setAmountValue(total)
  }, [productsInCart])

  function addProductInCart(product: Product) {
    setProductsInCart((prevState) => {
      const exist = prevState.find((productInCart) => productInCart.id === product.id);

      if (!exist) {
        return [...prevState, product];
      } else {
        return prevState.map((productInCart) => {
          if (productInCart.id === product.id) {
  
            return { ...productInCart, amount: productInCart.amount + 1 };
          } else {
            return productInCart;
          }
        });
      }
    });
  }

  function deleteProduct(productId: string) {
    const productToDelete = productsInCart.find(product => product.id === productId)

    if (!productToDelete) {
      return
    }

    if (productToDelete.amount > 1) {
      const updatedCart = productsInCart.map(p => {
        if (p.id === productId) {
          return {
            ...p,
            amount: p.amount - 1
          }
        }
        return p
      })
      setProductsInCart(updatedCart)
    } else {
      const productsWithoutDeleted = productsInCart.filter(product => product.id !== productId)
      setProductsInCart(productsWithoutDeleted)
    }

    const total = productsInCart.reduce((prevTotal, product) => prevTotal + parseFloat(product.price) * product.amount, 0)
    setAmountValue(total)
  }

  return (
    <CartContext.Provider
      value={{ addProductInCart, productsInCart, deleteProduct, amountValue, itensAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}
