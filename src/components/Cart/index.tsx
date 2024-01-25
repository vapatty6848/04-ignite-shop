import { CartButton } from "../CartButton";

import * as Dialog from '@radix-ui/react-dialog'
import { CartClosed, CartContent, CartFinalization, FinalizationDetails } from "./style";
import { X } from "phosphor-react";


import { useCart } from "@/hooks/useCart";
import { CartItem } from "../CartItem";
import { useState } from "react";
import axios from "axios";


export function Cart() {
  const { cartItems, cartTotal } = useCart();
  const cartQuantity = cartItems.length;

  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent >
          <CartClosed>
            <X size={24} weight="bold" />
          </CartClosed>

          <h2>Sacola de Compras</h2>

          <section>
            {cartItems.length <= 0 && (<p>Parece que seu carrinho ainda está vazio: </p>)}
            {cartItems.map((cartItems) => (
              <CartItem key={cartItems.id} cartItem={cartItems} />
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartQuantity} {cartQuantity === 1 ? "item" : "items"}</p>
              </div>
              <div>
                <span>Valor Total</span>
                <p>{formattedCartTotal}</p>
              </div>

            </FinalizationDetails>
            <button
              onClick={handleCheckout}
              disabled={isCreatingCheckoutSession || cartQuantity <= 0}
            >
              Finalizar compra
            </button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>

  )
}
