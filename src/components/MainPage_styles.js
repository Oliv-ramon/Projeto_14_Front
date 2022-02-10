import styled from 'styled-components';

const MainTitle = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
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
  color: #424246;
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
height: 80px;
margin: 10px;
display: flex;
flex-direction: row;
align-items: center;
overflow-x: auto;
white-space: nowrap;
gap: 0 14px;
list-style-type: none;
& li {
  
  font-size: 20px;
  font-weight: 700;
  color: #424246;
}
`;

const ProductsList = styled.ul`
width: 100%;
margin: 10px;
display: flex;
overflow-x: scroll;
flex-wrap: wrap;
gap: 20px;
`;

const ProductCard = styled.li`
width: 120px;
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color: #232227;
font-weight: 700;
& img {
  width: 80%;
}
& h2 {
  width: 80%;
  font-size: 12px;
  line-height: 15px;
  text-overflow: ellipsis;
}
`;

const Header = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px dashed orange;
`;

const Footer = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;

border: 1px dashed yellow;
`;


export { MainTitle, SearchBar, SearchInput, FilterIcon, CategoriesBar, ProductsList, ProductCard, Footer, Header };