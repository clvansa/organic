import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>O</Logo>
      <ListMenu>
        <ListItem>Features</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>Sign in</ListItem>
        <Button>Try free</Button>
      </ListMenu>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
`;
const Logo = styled.h1`
  padding-left: 20px;
  font-size: 4rem;
  font-weight: 600;
`;

const ListMenu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const ListItem = styled.li`
  padding: 10px;
  text-transform: uppercase;
  color: #323232;
  cursor: pointer;
  letter-spacing: 1px;
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  outline: none;
  border: 2px solid #323232;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover {
    background-color: #323232;
    color: white;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
