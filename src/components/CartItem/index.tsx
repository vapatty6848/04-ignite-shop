import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { CartProduct, CartProductDetails, CartProductImage } from "./style";

import { Trash } from "phosphor-react";

export function CartItem({ cartItem }) {
  const { removeCartItem } = useCart();

  return (
    <CartProduct key={cartItem.id}>
      <CartProductImage>
        <Image src={cartItem.imageUrl}
          alt=""
          width={100}
          height={93}
        />
      </CartProductImage>
      <CartProductDetails>
        <p>{cartItem.name}</p>
        <strong>{cartItem.price}</strong>
        <button
          onClick={() => removeCartItem(cartItem.id)}
          aria-label="remover"
          type="button"
        >
          <Trash size={24} /> Remover
        </button>
      </CartProductDetails>
    </CartProduct>
  )
}
