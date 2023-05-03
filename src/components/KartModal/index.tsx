import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CartsContainer, CloseButton, Content, ProductInfo, Title } from './styles'
import Image from 'next/image'
import { useState } from 'react'

export function KartModal() {
  const [products, setProducts] = useState([])

  return (
    <Dialog.Portal>

      <Content>

        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X height={32} width={32}/>
        </CloseButton>

        {products.map(product => {
          return (
            <CartsContainer key={product}>
              <Image alt=''/>

              <ProductInfo>
                <p>Camiseta Explorer</p>

                <span>79,90</span>

                <button>Remover</button>
              </ProductInfo>
          </CartsContainer>
          )
        })}

      </Content>

    </Dialog.Portal>
  )
}
