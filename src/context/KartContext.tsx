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
  productsInKart: Product[],
  deleteProduct: (productName: string) => void
}

export const KartContext = createContext({} as KartContext)

export function KartProvider({ children }: KartProviderProps) {
  const [isCreatingCheckoutSection, setIsCreatingCheckoutSection] = useState(false)
  const [productsInKart, setProductsInKart] = useState<Product[]>([])

  function addProductInKart(product: Product) {
    setIsCreatingCheckoutSection(true)

    const newProduct: Product = {
      name: product.name,
      price: product.price,
      imgUrl: product.imgUrl
    }

    setProductsInKart([...productsInKart, newProduct])

  }

  function deleteProduct(productName: string) {
    const productsWithoutDeleted = productsInKart.filter(product => {
      return product.name !== productName
    })

    setProductsInKart(productsWithoutDeleted)
  }

  return (
    <KartContext.Provider
      value={{ isCreatingCheckoutSection, addProductInKart, productsInKart, deleteProduct }}
    >
      {children}
    </KartContext.Provider>
  )
}