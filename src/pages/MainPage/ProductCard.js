import React from 'react';

import { ItemCard } from "../../components";

export default function ProductCard({children}) {

  const displayPrice = ((children.price)/100).toFixed(2).toLocaleString('pt-br', {style: 'currency', currency:'BRL'});
  
  return (
    <ItemCard>
      <img src={children.image} alt='product thumbnail'/>
      <h2>{children.description}</h2>
      <h3>R$ {displayPrice}</h3>
    </ItemCard>
  ); 
};
