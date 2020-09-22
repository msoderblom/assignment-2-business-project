import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  appearance: none;
  background-color: ${(props) => props.theme.summerSky};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 0.8em;
  padding: 1em;
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    color: ${(props) => props.theme.summerSky};
    background-color: white;
    cursor: pointer;
  }
`;

export default function Button({ title }) {
  return <ButtonStyled>{title}</ButtonStyled>;
}
