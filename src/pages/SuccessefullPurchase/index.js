import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/CartContext";

import { SuccessContainer } from "./style";

export default function SuccessefullPurchase() {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) {
      navigate("/sign-in")
    }
  }, []);

  return (
    <SuccessContainer>
        Parabens, sua compra foi realizada com sucesso!!! 👏🥳🎉
    </SuccessContainer>
  )
}