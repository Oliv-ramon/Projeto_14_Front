import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CartContext from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api"

import ItemElement from "./ItemElement";
import { BuyButton, CartContainer, Header } from "./style";

export default function Cart() {
  const { cartItens, setCartItens } = useContext(CartContext);
  const { auth, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const total = calcTotal();

  function calcTotal() {
    if (cartItens.length === 0) return 0;
    
    const total = cartItens.reduce((cI, nI) => cI.price + nI.price);
    
    return total;
  }

  async function handlePurchase() {
    try {
    await api.postPurchase(cartItens, auth.token);
    const { data } = await api.cleanCart( auth.token );
    setCartItens(data);
    navigate("/successfull-purchase");
    } catch (error) {
      console.log(error)
      alert("erro, tente novamente")
    }
  }

  async function fillCart() {
    const { data } = await api.getCartItens(auth.token);
    console.log(data)
    setCartItens(data);
  }

  useEffect(() => {
    if (!auth?.token) {
      console.log(auth, login)
      navigate("/sign-in")
    }
    fillCart();
  }, []);

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
          onClick={handlePurchase}
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