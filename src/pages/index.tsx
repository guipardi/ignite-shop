import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: '$purple',
  border: '0',
  borderRadius: '4px',
  padding: '4px 8px',

  'span': {
    fontWeight: 'bold'
  },

  '&:hover': {
    padding: '24px 28px'
  }
})

export default function Home() {
  return (
    <h1>Home</h1>
  ) 
}
