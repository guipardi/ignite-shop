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
  addProductInKart: (product: Product) => void,
  productsInKart: Product[],
  deleteProduct: (productName: string) => void
}

export const KartContext = createContext({} as KartContext)

export function KartProvider({ children }: KartProviderProps) {
  const [productsInKart, setProductsInKart] = useState<Product[]>([])

  function addProductInKart(product: Product) {
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
      value={{ addProductInKart, productsInKart, deleteProduct }}
    >
      {children}
    </KartContext.Provider>
  )
}