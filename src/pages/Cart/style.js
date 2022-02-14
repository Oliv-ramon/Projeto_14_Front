import styled from "styled-components";
import { Container, Button } from "../../components/FormComponents";



const Header = styled.header`
  min-width: 100%;
  padding: 20px 0;

  background-color: #161618;
  
  position: sticky;
  top: 0;
`;

const CartContainer = styled(Container)`
  ${({justify}) => justify && "justify-content: flex-start;"}

  gap: 0;  

  padding: 24px;

  h1 {
    align-self: flex-start;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  p {
    text-align: center;
  }
`;

const BuyButton = styled(Button)`
  border-radius: 30px;
`;

const Item = styled.li`
  width: 100%;
  padding: 20px;

  background-color: #232227;
  border-radius: 20px;

  display: flex;
  gap: 20px;

  div {
    width: 50%;
  }
`;

const ItemSection = styled.section`
  width: 50%;
  height: 150px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  text-align: center;

  img {  
    width: 100%;
    height: 100px;
    object-fit: contain;
  }
`;

const QuantityController = styled.div`
  min-width: 100%;
  height: 40px;

  border-radius: 20px;
  background-color: white;
  
  display: flex;
  
  color: #000;

  button {
    width: 30%;
  }
  div {
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export {
  Header,
  CartContainer,
  BuyButton,
  ItemSection,
  Item,
  QuantityController
}