import { createGlobalStyle } from "styled-components";
import { blackcurrant, white } from "./theme";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
body { font-size: 16px; 
  background-color: ${blackcurrant};
  color: ${white}

}
input, select { font-size: 100%; }
@media screen and (max-width: 767px) {
  input, select, textarea {
    font-size: 16px;
  }
}
`;
