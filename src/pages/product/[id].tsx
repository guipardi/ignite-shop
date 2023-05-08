import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { priceFormatter } from "@/src/utils/formatter";
import { useContext, useState } from "react";
import Head from "next/head";
import { KartContext } from "@/src/context/KartContext";

interface ProductProps {
  product: {
    id: string
    name: string
    imgUrl: string
    price: string
    description: string
    defaultPriceId: string
    amount: number
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductInKart } = useContext(KartContext)

  function handleAddProductInKart() {
    addProductInKart(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imgUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatter.format(parseFloat(product.price))}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProductInKart}>
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
    )
  }

export const getStaticPaths: GetStaticPaths = async () => {
  /* Buscar os produtos mais vendiso ou mais acessados */


  return {
    paths: [
      { params: { id: 'prod_NhVIbHvo9qacrp' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        price: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    /* revalidate: 60 * 60 * 1 // 1 hours */
  }
}