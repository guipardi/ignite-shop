import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return  (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>79, 90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea modi, repellat, voluptas deleniti quia eos quo magnam soluta maxime incidunt quaerat quidem earum, facilis id tempore esse? Ipsum, porro accusamus.</p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}