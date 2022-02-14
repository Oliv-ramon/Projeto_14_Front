import React, { useState, useEffect } from 'react';

import ProductCard from './ProductCard.js';
import MainFooter from './MainFooter.js';
import api from '../../services/api.js';

import { Container, MainTitle, LogoutButton, SearchBar, SearchField, CustomLoupe, FilterIcon, CategoriesBar, itemCategory, ProductsList, Header } from '../../components';

import { LogoutIcon, ProfileIcon, SliderIcon } from '../../components/mixedIcons.js';


export default function MainPage() {
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProductsArray, setFilteredProductsArray] = useState([]);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(
    [
      { name: '', displayName: 'Tudo', selected: true },
      { name: 'HLMT', displayName: 'Capacetes', selected: false },
      { name: 'GLVS', displayName: 'Luvas', selected: false },
      { name: 'JCKT', displayName: 'Jaquetas', selected: false },
      { name: 'BOOT', displayName: 'Calçados', selected: false },
      { name: 'GGLS', displayName: 'Óculos', selected: false }
    ]);

  function handleCategoryFilter(event) {
    console.log(event);
    /*
    if (filter === '') {
      setCategory(filter);
      setFilteredProductsArray(productsArray);
    }
    else {
      const filteredProducts =
        productsArray.filter(item => (item.category === filter));
      console.log(filteredProducts);
      setFilteredProductsArray(filteredProducts);
    }
    */
  }

  useEffect(() => {
    const productsPromise = api.getProducts();
    productsPromise.then(res => {
      setProductsArray(res.data);
      setFilteredProductsArray(res.data);
    });
  }, []);

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
        {categories.map((item, index)=> (
          <itemCategory
            key={index}
            isSelected={item.selected}
            onClick={handleCategoryFilter} >
              <h2>{item.displayName}</h2>
          </itemCategory>
        ))}
      </CategoriesBar>

      <ProductsList>
        {filteredProductsArray.map(item => (
          <ProductCard key={item.sku} >
            {item}
          </ProductCard>
        ))}
      </ProductsList>

      <MainFooter />

    </Container>
  );
}