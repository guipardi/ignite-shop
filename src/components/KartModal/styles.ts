import { styled } from "@/src/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  display: 'flex',
  width: '480px',
  height: '100vh',

  backgroundColor: '$gray800',
  position: 'absolute',
  right: '0',
  top: '0',
  bottom: '0',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  '&:focus': {
    outline: 'transparent'
  }
})

export const Title = styled(Dialog.Title, {
  fontSize: '20px',
  marginTop: '72px',
  marginLeft: '42px',
  fontWeight: 'bold',
  color: '$gray100'
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  border: '0',
  height: '24px',
  width: '24px',

  top: '1.5rem',
  right: '1.5rem',

  lineHeight: '0',
  cursor: 'pointer',
})