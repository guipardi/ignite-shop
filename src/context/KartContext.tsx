import { createContext, useState } from "react";

interface Product {
  name: string,
  price: string,
  imgUrl: string,
}

interface KartProviderProps {
  children: React.ReactNode
}

interface KartContext {
  isCreatingCheckoutSection: any,
  addProductInKart: (product: Product) => void,
  productsInKart: Product[]
}

export const KartContext = createContext({} as KartContext)

export function KartProvider({ children }: KartProviderProps) {
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] = useState(false)
  const [productsInKart, setProductsInKart] = useState<Product[]>([])

  function addProductInKart(product: any) {
    setIsCreatingCheckoutSection(true)

    const newProduct: Product = {
      name: product.name,
      price: product.price,
      imgUrl: product.imageUrl
    }

    setProductsInKart([...productsInKart, newProduct])

  }

  return (
    <KartContext.Provider
      value={{ isCreatingCheckoutSection, addProductInKart, productsInKart }}
    >
      {children}
    </KartContext.Provider>
  )
}