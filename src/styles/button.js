import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 60px;
  width: 50%;
  border: 1px solid #c7c0c0cb;
  background-color: #14b8a6;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
   background-color: #66c5ba;
  }

  &:active{
    background-color: cadetblue;
  }
`;

export const ButtonsGrid = styled.div`
  display: grid;

  /* 4 colunas */
  grid-template-columns: repeat(4, 1fr);

  gap: 1px;

  width: 100%;
`;