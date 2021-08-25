import React from "react";
import { Search } from "react-bootstrap-icons";
import styled from "styled-components";
import Header from "./Header";

const Intro = ({ isVisible }) => {
  console.log(isVisible);
  return (
    <>
      <Header />
      <Searchbar>
        <Search size="24px" />
        <Input type="text" placeholder="Search by location" />
      </Searchbar>
      <Text>
        lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur
        dolor sit amet, consectetur
      </Text>
      <Title isVisible={isVisible}>Organic</Title>
    </>
  );
};

export default Intro;

const Searchbar = styled.div`
  width: 600px;
  border: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  padding-left: 10px;
  font-size: 1.5rem;
  color: #323232;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  width: 600px;
  text-align: center;
  font-size: 1.5rem;
  padding: 40px 0;
  color: #323232;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Title = styled.h1`
  position: absolute;
  bottom: 100px;
  font-size: ${(props) => (props.isVisible ? "10vw" : "13vw")};
  transform: ${(props) =>
    props.isVisible ? "translateY(0) " : "translateY(42vh) "};
  padding-left: 10px;
  letter-spacing: ${(props) => (props.isVisible ? "3vw" : "5vw")};
  color: ${(props) => (props.isVisible ? "inherit" : "white")};
  font-weight: bold;
  transition: all 0.5s;
  z-index: 3;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.isVisible ? "translateY(0) " : "translateY(30vh) "};
  }
`;
