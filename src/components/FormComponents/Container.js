import styled from "styled-components";

const Container = styled.main`
  box-sizing: border-box;

  min-height: 100vh;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  background-color: #161618;
  
  font-family: 'Space Grotesk', sans-serif;
  color: #fff;

  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }
`;

export default Container;