import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItens, setCartItens] = useState([{
		"id": 2,
		"sku": "JCKT_001",
		"category": "JCKT",
		"description": "Jaqueta AlpineStars Halo Drystar Preto/Preto",
		"image": "https://i.ibb.co/nbMhVtx/JCKT-001.png",
		"size": "M",
		"price": 81200,
		"amount": 1,
	},
	{
		"id": 1,
		"sku": "JCKT_002",
		"category": "JCKT",
		"description": "Jaqueta RaceTech Fast Preto/Amarelo",
		"image": "https://i.ibb.co/87vzWHW/JCKT-002.png",
		"size": "M",
		"price": 68400,
		"amount": 1,
	}]);

  return (
    <CartContext.Provider value={{ cartItens, setCartItens }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;