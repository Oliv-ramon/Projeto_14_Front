import React, { useState } from 'react';

import { HomeIcon, CartIcon, PersonIcon } from "../../components/mixedIcons.js";
import { Footer } from '../../components';

export default function MainFooter() {
  const [footerSelected, setFooterSelected] = useState({ home: true, cart: false, user: false });

  function handleFooterClick(target) {
    console.log(target, '+ link to correct page');
  }

  return (
    <Footer>
      <HomeIcon
        size='28px'
        color={footerSelected.home === true ? '#4573E0' : '#535353'}
        onClick={() => handleFooterClick('home')} />
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