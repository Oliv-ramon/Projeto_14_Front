import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import CartContext from "../../contexts/CartContext";
import api from "../../services/api";

import { Item, ItemSection, QuantityController } from "./style";

export default function ItemElement({ id, sku, description, image, size, price, amount }) {
  const { cartItens, setCartItens } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  
  async function handleAmountChange(action) {
    const itemId = cartItens.findIndex(i => i.id === id);

    if(action === "+") {
      cartItens[itemId].amount += 1;
      await api.updateCart(cartItens, auth.token);
      return setCartItens([...cartItens]);
    }

    if (cartItens[itemId].amount - 1 === 0) {
      const result = window.confirm("Excluir item do carrinho?");

      if (result) {
        const cartItensFiltered = cartItens.filter(i => i.id !== id);
        await api.updateCart(cartItensFiltered, auth.token);
        return setCartItens(cartItensFiltered);
      }

      cartItens[itemId].amount += 1;
      await api.updateCart(cartItens, auth.token);
      setCartItens([...cartItens]);
    }

    cartItens[itemId].amount -= 1;
    await api.updateCart(cartItens, auth.token);
    setCartItens([...cartItens]);
  }

  return (
    <Item>
      <ItemSection>
        <img src={image} alt="foto do produto"/>
        <span className="item-name">{sku}</span>
        <span className="item-price">R$ {price/100}</span>
      </ItemSection>
      <ItemSection>
        <p className="description">{description}</p>
        <span className="
        size">{size}</span>
        <QuantityController>
          <button onClick={() => handleAmountChange("+")}>+</button>
          <div>{amount}</div>
          <button onClick={() => handleAmountChange("-")}>-</button>
        </QuantityController>
      </ItemSection>
    </Item>
  )
}