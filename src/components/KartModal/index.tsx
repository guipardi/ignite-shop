import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { AmountDiv, CartsContainer, CheckoutButton, CloseButton, Content, CostDiv, FinalizationDiv, ProductInfo, Separator, Title } from './styles'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { KartContext } from '@/src/context/KartContext'

export function KartModal() {
  const { productsInKart, deleteProduct } = useContext(KartContext)

  function handleDeleteProduct(productName: string) {
    deleteProduct(productName)
  }

  return (
    <Dialog.Portal>

      <Content>

        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X height={32} width={32}/>
        </CloseButton>

        <Separator>
          <div>
            {productsInKart.length > 0 && productsInKart.map(product => {
              return (
                <CartsContainer key={product.name}>
                  <Image src={product.imgUrl} alt='' width={24} height={24}/>

                  <ProductInfo>
                    <p>{product.name}</p>

                    <span>{product.price}</span>

                    <button onClick={() => handleDeleteProduct(product.name)}>Remover</button>
                  </ProductInfo>
              </CartsContainer>

              )
            })}
          </div>
          <FinalizationDiv>
            <AmountDiv>
              <p>Quantidade</p>
              <p>{productsInKart.length} itens</p>
            </AmountDiv>

            <CostDiv>
              <p>Valor total</p>
              <strong>79,90</strong>
            </CostDiv>

            <CheckoutButton>Finalizar Compra</CheckoutButton>
          </FinalizationDiv>
        </Separator>

      </Content>

    </Dialog.Portal>
  )
}
