import { before } from "node:test";
import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  div: {
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray800',
    borderRadius: '6px',
    cursor: 'pointer',
    position: 'relative', 

    span: {
      width: '24px',
      height: '24px',
      borderRadius: '1000px',
      position: 'absolute',
      top: '-7px',
      backgroundColor: '$green500',
      left: '31px',
      textAlign: 'center',
    }
  },
})
