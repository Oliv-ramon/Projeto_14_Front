import { useContext } from "react";

import CartContext from "../../contexts/CartContext";

import ItemElement from "./ItemElement";
import { BuyButton, CartContainer, Header } from "./style";

export default function Cart() {
  const { cartItens } = useContext(CartContext);
  const haveItens = cartItens.length === 0;
  const total = calcTotal();

  function calcTotal() {
    if (cartItens.length === 0) return 0;
    
    const total = cartItens.reduce((cI, nI) => cI.price + nI.price);
    
    return total;
  }

  if (!cartItens.length > 0) {
    return (
      <CartContainer>
        <p>Seu carrinho está vazio, adicione itens para fechar o pedido!</p>
      </CartContainer>
    )
  }

  return (
    <CartContainer justify="flex-start">
      <h1>Total: R$ {total}</h1>
      <Header>
        <BuyButton 
          disabled={haveItens}
        > 
          Fechar pedido
        </BuyButton>
      </Header>
      <ul>
        {cartItens.map(i => (
          <ItemElement 
            key={i._id}
            {...i}
          />
          ))}
      </ul>
      </CartContainer>
  )
}