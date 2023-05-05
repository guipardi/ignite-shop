import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CartsContainer, CloseButton, Content, ProductInfo, Title } from './styles'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { KartContext } from '@/src/context/KartContext'

export function KartModal() {
  const { productsInKart } = useContext(KartContext)

  return (
    <Dialog.Portal>

      <Content>

        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X height={32} width={32}/>
        </CloseButton>

        {productsInKart.length > 0 && productsInKart.map(product => {
          return (
            <CartsContainer key={product.name}>
              <Image src={product.imgUrl} alt='' width={24} height={24}/>

              <ProductInfo>
                <p>{product.name}</p>

                <span>{product.price}</span>

                <button>Remover</button>
              </ProductInfo>
          </CartsContainer>
          )
        })}

      </Content>

    </Dialog.Portal>
  )
}
