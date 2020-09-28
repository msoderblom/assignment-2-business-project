import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

import { RiUser3Fill } from "react-icons/ri";

const MainContent = styled.main`
  padding: 0.5rem;

  @media only screen and (min-width: 600px) {
    padding: 1rem;
  }
`;

const HeaderStyled = styled.header`
  padding: 1em;
  background-color: ${(props) => props.theme.christalle};
  color: white;
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.h1`
  font-size: 1em;

  @media only screen and (min-width: 600px) {
    font-size: 2em;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const IconWrapper = styled.div`
  padding: 5px 10px;
  line-height: 0;
`;

export default function LayoutSimple({ children }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      <HeaderStyled>
        <Heading>Business Management</Heading>
        <UserWrapper>
          {user && (
            <>
              <IconWrapper>
                <RiUser3Fill size={30} />
              </IconWrapper>
              <div>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>{user.email}</p>
              </div>
            </>
          )}
        </UserWrapper>
      </HeaderStyled>

      <MainContent>{children}</MainContent>
    </div>
  );
}
