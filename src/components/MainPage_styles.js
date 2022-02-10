import styled from 'styled-components';

const MainTitle = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
  }
`;

const SearchBar = styled.div`
width: 100%;
height: 32px;
margin: 10px;
display: flex;
align-items: center;
`;

const SearchInput = styled.input`
  width: 75%;
  height: 100%;
  margin: 0 10px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232227;
  font-size: 20px;
  color: #535353;
  border-radius: 10px;
`;

const FilterIcon = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #232227;
  font-size: 22px;
  color: #FFFFFF;
`;

const CategoriesBar = styled.ul`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
overflow-x: scroll;
gap: 10px;
& li {
  font-size: 20px;
  font-weight: 700;
  color: #535353;
}
`;

const ProductsList = styled.ul`
width: 100%;
display: flex;
margin: 0 auto 50px auto;
justify-content: center;
overflow-y: scroll;
flex-wrap: wrap;
gap: 21px 21px;
`;

const ProductCard = styled.li`
width: 46%;
height: 220px;
padding: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color: #232227;
font-weight: 700;
& img {
  width: 95%;
  margin: 0 auto auto auto;
  object-fit: contain;
}
& h2 {
  width: 95%;
  margin: 5px auto;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
& h3 {
  width: 95%;
  margin: auto auto 0 auto;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
}
`;

const Header = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px dashed orange;
`;

const Footer = styled.div`
width: 100%;
position: fixed;
bottom: 0;
right: 0;
padding: 10px 5px 0 5px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #000000;
`;


export { MainTitle, SearchBar, SearchInput, FilterIcon, CategoriesBar, ProductsList, ProductCard, Footer, Header };