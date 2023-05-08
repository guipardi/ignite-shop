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
    const itemIsAlreadyInKart = productsInKart.find(productInKart => (productInKart.id === product.id) != undefined)

    if (itemIsAlreadyInKart) {
      itemIsAlreadyInKart.amount += 1
    } else {
      const newProduct: Product = {
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        id: product.id,
        amount: 1
      }
  
      setProductsInKart([...productsInKart, newProduct])
    }

    setAmountValue(parseFloat(product.price) + amountValue)
  }

  function deleteProduct(productId: string) {
    const productToDelete = productsInKart.find(product => {
      return product.id == productId
    })

    if (productToDelete!.amount > 1) {
      productToDelete!.amount -= 1
    } else {
      const productsWithoutDeleted = productsInKart.filter(product => {
        return product.id !== productId
      })  

      setProductsInKart(productsWithoutDeleted)
    }
  
    let total = 0

    productsInKart.forEach(product => {
      total += parseFloat(product.price)
    })

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