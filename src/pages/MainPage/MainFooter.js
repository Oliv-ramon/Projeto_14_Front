import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { HomeIcon, CartIcon, PersonIcon } from "../../components/mixedIcons.js";
import { Footer } from '../../components';

export default function MainFooter() {
  const [footerSelected, setFooterSelected] = useState({ home: true, cart: false, user: false });
  const navigate = useNavigate();

  function handleFooterClick(target) {
    console.log(target, '+ link to correct page');
    navigate(target);
  }

  return (
    <Footer>
      <HomeIcon
        size='28px'
        color={footerSelected.home === true ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('/')} />
      <CartIcon
        size='28px'
        color={footerSelected.cart === true ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('cart')} />
      <PersonIcon
        size='28px'
        color={footerSelected.user === true ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('user')} />
    </Footer>
  );
}