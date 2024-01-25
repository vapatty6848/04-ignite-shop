import { styled } from "@/styles"


export const CartProduct = styled("div", {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8125rem',

})

export const CartProductImage = styled("div", {
  width: '6.3125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
  },

})
