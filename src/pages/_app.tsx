import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Image from "next/image"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import { Tote } from "phosphor-react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
        <div>
          <Tote size={24}/>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}