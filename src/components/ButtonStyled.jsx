import React from "react";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background: rgb(225, 115, 97);
  background: linear-gradient(
    90deg,
    rgba(225, 115, 97, 1) 25%,
    rgba(209, 76, 137, 1) 70%
  );
  border: none;
  border-radius: 50px;
  /*   box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5); */
  color: white;
  font-size: 0.8em;
  padding: 0.5em 0.8em;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default function ButtonStyled({ title, onClickFunc }) {
  function handleOnClick() {
    if (onClickFunc) {
      onClickFunc();
    }
  }

  return <Button onClick={handleOnClick}>{title}</Button>;
}
