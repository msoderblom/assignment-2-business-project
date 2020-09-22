import React from "react";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.summerSky};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.8em;
  padding: 0.5em 0.8em;
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    color: ${(props) => props.theme.summerSky};
    background-color: white;
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
