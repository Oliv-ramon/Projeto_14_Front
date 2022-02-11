import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 46px;

  background: #4a78e3;
  border-radius: 5px;

  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  :disabled {
    opacity: 0.7;
    color: rgb(256, 256, 256, 0.8);
  }
`;

export default Button;