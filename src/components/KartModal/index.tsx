import * as Dialog from '@radix-ui/react-dialog'
import { MinusCircle, PlusCircle, X } from 'phosphor-react'
import { AmountDiv, ButtonsContainer, CartsContainer, CheckoutButton, CloseButton, Content, CostDiv, FinalizationDiv, ProductInfo, Separator, SpanAmount, Title } from './styles'
import { useContext } from 'react'
import { KartContext } from '@/src/context/KartContext'
import { priceFormatter } from '@/src/utils/formatter'
import Image from 'next/image'

export function KartModal() {
  const { productsInKart, deleteProduct, amountValue } = useContext(KartContext)
  
  function handleDeleteProduct(productId: string) {
    deleteProduct(productId)
  }

  function handleCheckout() {
    console.log('Finalizando a compra...')
  }

  return (
    <Dialog.Portal>
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton asChild>
          <X height={32} width={32} />
        </CloseButton>
        <Separator>
          <div>
            {productsInKart.length > 0 &&
              productsInKart.map((product) => {
                return (
                  <CartsContainer key={product.id}>
                    <SpanAmount>{product.amount}</SpanAmount>
                    <Image src={product.imgUrl} alt="" width={24} height={24} />
                    <ProductInfo>
                      <p>{product.name}</p>
                      <span>{priceFormatter.format(parseFloat(product.price))}</span>
                      <ButtonsContainer>
                        <button onClick={() => handleDeleteProduct(product.id)}><MinusCircle size={24}/></button>
                        <button onClick={() => handleDeleteProduct(product.id)}><PlusCircle size={24}/></button>
                      </ButtonsContainer>
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
              <strong>{priceFormatter.format(amountValue)}</strong>
            </CostDiv>
            <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
          </FinalizationDiv>
        </Separator>
      </Content>
    </Dialog.Portal>
  )
}
