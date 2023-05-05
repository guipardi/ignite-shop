import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { Tote } from "phosphor-react"
import { KartModal } from "../components/KartModal"
import Link from "next/link"
import { KartContext, KartProvider } from "../context/KartContext"
import { useContext } from "react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { productsInKart } = useContext(KartContext)

  return (
    <KartProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt=""/>
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild={true}>
              <div>
                <Tote size={24}/>
                <KartContext.Consumer>
                  {({ productsInKart }) => <span>{productsInKart.length}</span>}
                </KartContext.Consumer>
              </div>
            </Dialog.Trigger>

            <KartModal />
          </Dialog.Root>
        </Header>
        
        <Component {...pageProps} />
     
      </Container>
    </KartProvider>
  )
}
