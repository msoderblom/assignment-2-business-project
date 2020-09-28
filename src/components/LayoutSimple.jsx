import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const MainContent = styled.main`
  padding: 0.5rem;

  @media only screen and (min-width: 600px) {
    padding: 1rem;
  }
`;

export default function LayoutSimple({ children }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <header>
          <h1>Business Project</h1>
          <div>
            <p>
              Signed in as {user.firstName} {user.lastName}
            </p>
          </div>
        </header>
      ) : (
        <header>
          <h1>Business Project</h1>
        </header>
      )}

      <MainContent>{children}</MainContent>
    </div>
  );
}
