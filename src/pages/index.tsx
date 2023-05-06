import { FooterDivInfo, FooterButtonTote, HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react"
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import { Stripe } from "stripe"
import { priceFormatter } from "../utils/formatter";
import { Tote } from "phosphor-react";
import { useContext } from "react";
import { KartContext } from "../context/KartContext";
import Link from "next/link"
import Head from "next/head";
import Image from "next/image"
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string,
    name: string,
    imgUrl: string,
    price: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addProductInKart } = useContext(KartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddProductInKart(product: any) {
    addProductInKart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>


      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link 
              key={product.id} 
              href={`product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imgUrl} width={520} height={480} alt=""/>

                <footer>
                  <FooterDivInfo>
                    <strong>{product.name}</strong>
                    <span>{priceFormatter.format(parseFloat(product.price))}</span>
                  </FooterDivInfo>
                  <FooterButtonTote onClick={() => handleAddProductInKart(product)}>
                    <Tote size={24}/>
                  </FooterButtonTote>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  ) 
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imgUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return {
    props: {
      products: products
    },
    revalidate: 60 * 60 * 2 /* 2 Horas */
  }
}
