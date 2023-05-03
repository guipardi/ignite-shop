import { createContext, useState } from "react";

interface KartContext {
  isCreatingCheckoutSection: any,
  addProductInKart: (product: any) => void,
  productsInKart: any
}

export const KartContext = createContext({} as KartContext)

export function KartProvider({ children }: any) {
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] = useState(false)
  const [productsInKart, setProductsInKart] = useState([{}])

  function addProductInKart(product: any) {
    setIsCreatingCheckoutSection(true)

    setProductsInKart([...productsInKart, {
      name: product.name,
      price: product.price,
      imgUrl: product.imageUrl
    }])
  }

  return (
    <KartContext.Provider
      value={{ isCreatingCheckoutSection, addProductInKart, productsInKart }}
    >
      {children}
    </KartContext.Provider>
  )
}