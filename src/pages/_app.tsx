import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { Tote } from "phosphor-react"
import { CartModal } from "../components/CartModal"
import Link from "next/link"
import { CartContext, CartProvider } from "../context/CartContext"
import { useContext } from "react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { itensAmount } = useContext(CartContext)

  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt=""/>
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild={true}>
              <div>
                <Tote size={24}/>
                <CartContext.Consumer>
                  {({ itensAmount }) => <span>{itensAmount}</span>}
                </CartContext.Consumer>
              </div>
            </Dialog.Trigger>

            <CartModal />
          </Dialog.Root>
        </Header>
        
        <Component {...pageProps} />
     
      </Container>
    </CartProvider>
  )
}
