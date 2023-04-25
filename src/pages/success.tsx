import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhull <strong>Guilherme Pardi Borges</strong>, sua <strong>camiseta Beyond the Limits</strong> já está a caminha de sua casa
      </p>

      <Link href='/'>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}