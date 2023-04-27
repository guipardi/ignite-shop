import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Content } from './styles'

export function KartModal() {
  return (
    <Dialog.Portal>

      <Content>

        <Dialog.Title>Sacola de compras</Dialog.Title>

        <Dialog.Close>
          <X size={32}/>
        </Dialog.Close>

        <h1>items</h1>

      </Content>

    </Dialog.Portal>
  )
}
