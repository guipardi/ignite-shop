import Link from "next/link";
import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Image from "next/image";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  name: string,
  product: {
    name: string,
    image: string
  }
}

export default function Success({ name, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image alt="" src={product.image} width={120} height={110}/>
        </ImageContainer>

        <p>
          Uhull <strong>{name}</strong>, sua <strong>{product.name}</strong> já está a caminha de sua casa
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const product = session.line_items?.data[0].price?.product as Stripe.Product
  const customerName = session.customer_details?.name

  return {
    props: {
      name: customerName,
      product: {
        name: product.name,
        image: product.images[0]
      }
    }
  }
}