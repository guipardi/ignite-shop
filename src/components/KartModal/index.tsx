import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Title } from './styles'

export function KartModal() {
  return (
    <Dialog.Portal>

      <Content>

        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X height={32} width={32}/>
        </CloseButton>

        

      </Content>

    </Dialog.Portal>
  )
}
