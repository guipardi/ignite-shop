import { createContext, useState } from "react";

interface Product {
  name: string,
  price: string,
  imgUrl: string,
  id: string,
  amount: number,
}

interface KartProviderProps {
  children: React.ReactNode
}

interface KartContext {
  addProductInKart: (product: Product) => void,
  productsInKart: Product[],
  deleteProduct: (product: string) => void,
  amountValue: number
}

export const KartContext = createContext({} as KartContext)

export function KartProvider({ children }: KartProviderProps) {
  const [productsInKart, setProductsInKart] = useState<Product[]>([])
  const [amountValue, setAmountValue] = useState(0)

  function addProductInKart(product: Product) {
    setProductsInKart((prevState) => {
      const exist = prevState.find((productInKart) => productInKart.id === product.id);
      if (!exist) {
        return [...prevState, { ...product, amount: 1 }];
      } else {
        return prevState.map((productInKart) => {
          if (productInKart.id === product.id) {
            return { ...productInKart, amount: productInKart.amount + 1 };
          } else {
            return productInKart;
          }
        });
      }
    });
  }

  function deleteProduct(productId: string) {
    const productToDelete = productsInKart.find(product => product.id === productId)

    if (!productToDelete) {
      return
    }

    if (productToDelete.amount > 1) {
      const updatedKart = productsInKart.map(p => {
        if (p.id === productId) {
          return {
            ...p,
            amount: p.amount - 1
          }
        }
        return p
      })
      setProductsInKart(updatedKart)
    } else {
      const productsWithoutDeleted = productsInKart.filter(product => product.id !== productId)
      setProductsInKart(productsWithoutDeleted)
    }

    const total = productsInKart.reduce((prevTotal, product) => prevTotal + parseFloat(product.price) * product.amount, 0)
    setAmountValue(total)
  }

  return (
    <KartContext.Provider
      value={{ addProductInKart, productsInKart, deleteProduct, amountValue }}
    >
      {children}
    </KartContext.Provider>
  )
}
