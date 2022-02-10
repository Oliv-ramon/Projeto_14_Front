import React from 'react';

import ProductCard from './ProductCard.js';
import MainFooter from './MainFooter.js';

import { Container, MainTitle, SearchBar, SearchField, CustomLoupe, FilterIcon, CategoriesBar, ProductsList, Header, BlueHelmet, WhiteHelmet } from '../../components';

import { HelmetIcon, ProfileIcon, SliderIcon } from '../../components/mixedIcons.js';

const productsArray = [
  {
    sku: '001',
    description: 'Capacete Azul Fosco1',
    image: BlueHelmet,
    size: '58',
    price: 67000
  },
  {
    sku: '002',
    description: 'Capacete Azul Fosco2',
    image: BlueHelmet,
    size: '60',
    price: 67000
  },
  {
    sku: '003',
    description: 'Capacete Azul Fosco3',
    image: BlueHelmet,
    size: '60',
    price: 67000
  },
  {
    sku: '004',
    description: 'Capacete Branco com nome comprido',
    image: WhiteHelmet,
    size: '58',
    price: 71000
  },
  {
    sku: '005',
    description: 'Capacete Branco com nome comprido',
    image: WhiteHelmet,
    size: '60',
    price: 71000
  },
  {
    sku: '006',
    description: 'Capacete Branco com nome comprido',
    image: WhiteHelmet,
    size: '59',
    price: 71000
  },
  {
    sku: '007',
    description: 'Capacete Branco com nome comprido',
    image: WhiteHelmet,
    size: '62',
    price: 71000
  }
];


export default function MainPage() {

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
        {productsArray.map( item => (
          <ProductCard key={item.sku} >
            {item}
          </ProductCard>
        ))}
      </ProductsList>

      <MainFooter />

    </Container>
  );
}