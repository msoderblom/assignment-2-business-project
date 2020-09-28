import React from "react";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.5);
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  line-height: 0;
  transition: all 0.2s ease-in-out;

  :hover {
    @media only screen and (min-width: 600px) {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export default function EditButton({ children, action }) {
  return <Button onClick={action}>{children}</Button>;
}
