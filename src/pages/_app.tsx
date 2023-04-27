import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { Tote } from "phosphor-react"
import { KartModal } from "../components/KartModal"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
        <Dialog.Root>
          <Dialog.Trigger asChild={true}>
            <div><Tote size={24}/></div>
          </Dialog.Trigger>

          <KartModal />
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}