import React from 'react';

import { ItemCard } from "../../components";

export default function ProductCard({children}) {
  return (
    <ItemCard>
      <img src={children.image} alt='product thumbnail'/>
      <h2>{children.description}</h2>
      <h3>R$ {children.price}</h3>
    </ItemCard>
  ); 
};
