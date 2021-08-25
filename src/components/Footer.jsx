import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "relative",
      }}
    >
      <Title>Want to be informed ?</Title>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Searchbar>
          <Input type="text" placeholder="Email" />
          <Button>Subscribe</Button>
        </Searchbar>

        <ListMenu>
          <ListItem>About</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Terms</ListItem>
        </ListMenu>
        <Logo>O</Logo>
      </Container>
    </div>
  );
};

export default Footer;

const Title = styled.h1`
  font-size: 3rem;
  color: #323232;
  font-weight: bold;
  z-index: 20 !important;
  position: absolute;
  top: 0;
  transform: translateY(-55%) !important;

  @media (max-width: 765px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  border: none;
  padding: 8px 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: #838181;
  background-color: #323232;
  margin-left: 10px;
  letter-spacing: 1px;
  transition: all 0.5s;

  &:hover {
    color: #f7f7f7;
  }
  @media (max-width: 450px) {
    margin-top: 10px;
  }
`;

const Searchbar = styled.div`
  width: 30%;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  background-color: transparent;
  padding-left: 10px;
  font-size: 1.5rem;

  color: #323232;
  border: 2px solid #323232;

  &:focus {
    outline: none;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`;

const ListMenu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  padding-top: 150px;
  width: 100%;
`;
const ListItem = styled.li`
  /* padding: 10px; */
  text-transform: uppercase;
  color: #323232;
  cursor: pointer;
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;

  &::after {
    content: "";
    width: 0%;
    height: 1.5px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #323232;
    transition: all 0.5s;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 0.8rem;
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  color: #323232;
  cursor: pointer;
`;
