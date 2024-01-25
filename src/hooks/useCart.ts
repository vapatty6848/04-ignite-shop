import { CartContext } from '@/components/context/CartContext';
import { useContext } from 'react';

export function useCart() {
  return useContext(CartContext)
}

// resumo para não ficar importando em toda a pagina as importações
