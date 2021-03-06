import React from "react";
import styled, { css } from "styled-components";

export const buttonCSS = css`
  appearance: none;
  background: rgb(225, 115, 97);
  background: linear-gradient(
    90deg,
    rgba(225, 115, 97, 1) 25%,
    rgba(209, 76, 137, 1) 70%
  );
  border: none;
  border-radius: 50px;
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

const Button = styled.button`
  ${buttonCSS}
`;

export default function ButtonStyled({ title, onClickFunc }) {
  function handleOnClick() {
    if (onClickFunc) {
      onClickFunc();
    }
  }

  return <Button onClick={handleOnClick}>{title}</Button>;
}
