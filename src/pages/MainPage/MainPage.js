import React from 'react';
import { Container, MainTitle, SearchBar, SearchField, CustomLoupe, FilterIcon, CategoriesBar, ProductsList, ProductCard, Footer, Header } from '../../components';

import { RiEqualizerFill } from 'react-icons/ri';
import { TiHome } from 'react-icons/ti';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

import BlueHelmet from '../../assets/NORISK_FORCE-MONOCOLOR-MATT-BLUE_3.png';
import WhiteHelmet from '../../assets/NORISK-FF345-ROUTE-MOTION--C--VISEIRA-SOLAR--BRANCO-PRETO-VERMELHO-3-min.png';

export default function MainPage() {

  return (
    <Container>
      <Header>
        <GiFullMotorcycleHelmet size='42px' color='#424246' />
        <CgProfile size='42px' color='#555' />
      </Header>
      <MainTitle><h1>Seja bem vindo à _boot_Store!</h1></MainTitle>

      <SearchBar>
        <SearchField>
          <CustomLoupe />
          <input
            type='text'
            placeholder='Buscar produtos' />          
        </SearchField>

        <FilterIcon><RiEqualizerFill /></FilterIcon>
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
        <ProductCard>
          <img src={BlueHelmet} alt='blue helmet' />
          <h2>Capacete Azul Fosco</h2>
          <h3>R$ 670,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={WhiteHelmet} alt='white helmet' />
          <h2>Capacete Branco com nome comprido</h2>
          <h3>R$ 710,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={BlueHelmet} alt='blue helmet' />
          <h2>Capacete Azul Fosco</h2>
          <h3>R$ 670,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={BlueHelmet} alt='blue helmet' />
          <h2>Capacete Azul Fosco</h2>
          <h3>R$ 670,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={WhiteHelmet} alt='white helmet' />
          <h2>Capacete Branco com nome comprido</h2>
          <h3>R$ 710,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={WhiteHelmet} alt='white helmet' />
          <h2>Capacete Branco com nome comprido</h2>
          <h3>R$ 710,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={BlueHelmet} alt='blue helmet' />
          <h2>Capacete Azul Fosco</h2>
          <h3>R$ 670,00</h3>
        </ProductCard>

        <ProductCard>
          <img src={WhiteHelmet} alt='white helmet' />
          <h2>Capacete Branco com nome comprido</h2>
          <h3>R$ 710,00</h3>
        </ProductCard>

      </ProductsList>

      <Footer>
        <TiHome size='42px' color='#4573E0' />
        <MdShoppingCart size='42px' color='#535353' />
        <BsFillPersonFill size='42px' color='#535353' />

      </Footer>

    </Container>
  );
}