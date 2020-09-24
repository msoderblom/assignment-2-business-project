import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
body { font-size: 16px; }
input, select { font-size: 100%; }
@media screen and (max-width: 767px) {
  input, select, textarea {
    font-size: 16px;
  }
}
`;
