import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CartsContainer, CloseButton, Content, ProductInfo, Title } from './styles'
import Image from 'next/image'

export function KartModal() {
  return (
    <Dialog.Portal>

      <Content>

        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X height={32} width={32}/>
        </CloseButton>

        <CartsContainer>
            <Image alt=''/>

            <ProductInfo>
              <p>Camiseta Explorer</p>

              <span>79,90</span>

              <button>Remover</button>
            </ProductInfo>
        </CartsContainer>

      </Content>

    </Dialog.Portal>
  )
}
