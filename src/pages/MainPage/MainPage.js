import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.js';
import MainFooter from './MainFooter.js';
import api from '../../services/api.js';

import { Container, MainTitle, LogoutButton, SearchBar, SearchField, CustomLoupe, FilterIcon, CategoriesBar, ProductsList, Header } from '../../components';

import { LogoutIcon, ProfileIcon, SliderIcon } from '../../components/mixedIcons.js';


export default function MainPage() {
  const [productsArray, setProductsArray] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const productsPromise = api.getProducts(categoryFilter);
    productsPromise.then(res => setProductsArray(res.data));
    productsPromise.catch(error => {
      console.log(error, '!erro! obtendo produtos!');
    }); 
  }, [categoryFilter]);

  return (
    <Container>
      <Header>
        <LogoutButton>
          <LogoutIcon size='32px' color='#424246' />
        </LogoutButton>
        
        <ProfileIcon size='32px' color='#555' />
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
        <li onClick={() => setCategoryFilter('')}>Tudo</li>
        <li onClick={() => setCategoryFilter('HLMT')}>Capacetes</li>
        <li onClick={() => setCategoryFilter('GLVS')}>Luvas</li>
        <li onClick={() => setCategoryFilter('JCKT')}>Jaquetas</li>
        <li onClick={() => setCategoryFilter('BOOT')}>Calçados</li>
        <li onClick={() => setCategoryFilter('GGLS')}>Óculos</li>
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