import { styled } from "@/src/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
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
  },
})

export const Title = styled('h1', {
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

export const CartsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr', // define a primeira coluna com tamanho automático
  gap: '20px',
  marginTop: '2rem',
  marginLeft: '3rem',

  img: {
    gridColumn: '1', // define que a imagem ocupa a primeira coluna
    width: '100px',
    height: '100px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  },
});

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  p: {
    color: '$gray300',
    fontSize: '18px',
  },

  span: {
    color: '$gray100',
    fontSize: '18px',
    fontWeight: 'bold',
  },

  button: {
    border: 0,
    backgroundColor: '$gray800',
    color: '$green500',
    textAlign: 'left',
    cursor: 'pointer'
  }
})

export const AmountDiv = styled('div', {
  marginLeft: '42px',
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '42px'
})

export const CostDiv = styled('div', {
  marginLeft: '42px',
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '42px',
  marginBottom: '57px',
  marginTop: '7px',

  p: {
    fontWeight: 'bold',
  },

  strong: {
    fontSize: '24px',
  },
})

export const CheckoutButton = styled('button', {
  width: '400px',
  margin: '0 42px 0 42px',
  padding: '20px 32px 20px 32px',
  backgroundColor: '$green500',
  border: 'none',
  borderRadius: '8px',
  color: '$white',
  cursor: 'pointer',
})

export const Separator = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
})

export const FinalizationDiv = styled('div', {
  marginBottom: '48px'
})