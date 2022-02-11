import React, { useState, useEffect } from 'react';
//
import axios from 'axios';
//
import ProductCard from './ProductCard.js';
import MainFooter from './MainFooter.js';

import { Container, MainTitle, SearchBar, SearchField, CustomLoupe, FilterIcon, CategoriesBar, ProductsList, Header, BlueHelmet, WhiteHelmet } from '../../components';

import { HelmetIcon, ProfileIcon, SliderIcon } from '../../components/mixedIcons.js';


export default function MainPage() {
  const [productsArray, SetProductsArray] = useState([]);


  function testGet() {
    console.log('called testGet!');
    //
    const productsPromise = axios.get("http://localhost:5000/products");
    productsPromise.then(resp => {
      console.log(resp.data);
      SetProductsArray(resp.data);
    })
    //
  }

  useEffect(testGet, []);



  return (
    <Container>
      <Header>
        <HelmetIcon size='42px' color='#424246' />
        <ProfileIcon size='42px' color='#555' />
      </Header>
      <MainTitle><h1>Seja bem vindo à _boot_Store!</h1></MainTitle>

      <SearchBar>
        <SearchField>
          <CustomLoupe />
          <input
            type='text'
            placeholder='Buscar produtos' />
        </SearchField>

        <FilterIcon><SliderIcon /></FilterIcon>
      </SearchBar>

      <CategoriesBar>
        <li>Tudo</li>
        <li>Capacetes</li>
        <li>Luvas</li>
        <li>Jaquetas</li>
        <li>Calçados</li>
        <li>Óculos</li>
      </CategoriesBar>

      <ProductsList>
        {productsArray.map(item => (
          <ProductCard key={item.sku} >
            {item}
          </ProductCard>
        ))}
      </ProductsList>

      <MainFooter />

    </Container>
  );
}