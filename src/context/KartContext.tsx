import { createContext, useState } from "react";

interface Product {
  name: string,
  price: string,
  imgUrl: string,
  id: string
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
    const newProduct: Product = {
      name: product.name,
      price: product.price,
      imgUrl: product.imgUrl,
      id: product.id
    }

    setProductsInKart([...productsInKart, newProduct])

    setAmountValue(parseFloat(product.price) + amountValue)
  }

  function deleteProduct(productId: string) {
    const productsWithoutDeleted = productsInKart.filter(product => {
      return product.id != productId
    })

    setProductsInKart(productsWithoutDeleted)

    let amountWithoutDeleted = 0
  
    productsWithoutDeleted.forEach(product => {
      amountWithoutDeleted += parseFloat(product.price)
    })

    setAmountValue(amountWithoutDeleted)
  }

  return (
    <KartContext.Provider
      value={{ addProductInKart, productsInKart, deleteProduct, amountValue }}
    >
      {children}
    </KartContext.Provider>
  )
}