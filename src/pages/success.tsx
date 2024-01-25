
import { SuccessContainer, ImageContainer, ImagesContainer } from "../styles/pages/success";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

interface SuccessProps {
  costumerName: string;
  productsImages: string[];
}
export default function Success({ costumerName, productsImages }: SuccessProps) {

  return (
    <>
      <Head>
        <title>Buy Confirm | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Success Buy</h1>
        <ImagesContainer>
          {productsImages.map((image, i) => (
            <ImageContainer key={i}>
              <Image src={image} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>
        <h1> Compra Efetuada!</h1>
        <p>
          Wow <strong>{costumerName}</strong>, your {' '}
          <strong>{productsImages.length}{' '} shirt {' '}</strong>
          Everything is ready. Your box  is coming.
        </p>

        <Link href="/">
          Back
        </Link>
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

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const productsImages = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product;
    return product.images[0]
  });

  return {
    props: {
      costumerName,
      productsImages,
    }
  }
}
