import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  color: ${(props) => props.theme.white};

  @media only screen and (min-width: 600px) {
  }
`;

export default function HeadingPage({ children }) {
  return <Heading>{children}</Heading>;
}
