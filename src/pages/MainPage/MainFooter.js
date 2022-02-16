import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { HomeIcon, CartIcon, PersonIcon } from "../../components/mixedIcons.js";
import { Footer } from '../../components';

export default function MainFooter() {
  const [buttonSelected, setButtonSelected] = useState([
    { route: "/", selected: true },
    { route: "/cart", selected: false }, 
    { route: "/user", selected: false }
  ]);
  const navigate = useNavigate();

  function handleFooterClick(route) {
    buttonSelected.forEach(b => {
      if (b.selected === true) {
        b.selected = false;
      }
      if (b.route === route) {
        b.selected = true;
      }
    });
    console.log(buttonSelected, "antes")
    setButtonSelected([...buttonSelected])
    console.log(buttonSelected, "depois")
    navigate(route);
  }

  function itemOnArray(route) {
    const desiredItem = buttonSelected.find(b => b.route === route);

    return desiredItem;
  }

  return (
    <Footer>
      <HomeIcon
        size='28px'
        color={itemOnArray("/").selected ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('/')} />
      <CartIcon
        size='28px'
        color={itemOnArray("/cart").selected ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('/cart')} />
      <PersonIcon
        size='28px'
        color={itemOnArray("/user").selected ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('/user')} />
    </Footer>
  );
}