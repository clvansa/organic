import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const Review = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Container>
        <Row>
          <CustomCol xs={12} md={6}>
            <Title>Home-Mode</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eaque aliquam mollitia sequi praesentium repellat, illum vitae
              accusantium neque, culpa eos delectus. Non, eum molestias rem
              ratione ea odit! aliquam mollitia sequi praesentium repellat,
              illum vitae accusantium neque, culpa eos delectus. Non, eum
              molestias rem ratione ea odit! Ea?
            </Subtitle>
            <Button>Make an order</Button>
          </CustomCol>
          <Col xs={12} md={3} style={{ position: "relative" }}>
            {/* <ImageEier src="/eier.png" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;

const Title = styled.h1`
  font-size: 2em;
  font-size: 5vw;
  color: white;
  font-weight: bold;
  width: 70vw;
`;
const Subtitle = styled.p`
  padding-top: 20px;
  color: #bbb;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #ffd068;
  text-transform: uppercase;
  font-weight: 600;
`;

const ImageEier = styled.img`
  position: absolute;
  width: 200px;
  right: 5vw;
  bottom: -10vh;
`;

const CustomCol = styled(Col)`
  position: relative;
  top: 0;
  z-index: 2;
  border-right: 1px solid rgba(110, 107, 107, 0.3);
  height: 150vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 200px;

  &::before {
    content: "";
    width: 1px;
    height: 800px;
    position: absolute;
    left: 0;
    bottom: 65%;
    background-color: rgba(110, 107, 107, 0.3);
  }

  @media (max-width: 768px) {
    border-right: none;
    padding-bottom: 400px;
    &:before {
      width: 0;
    }
  }
`;
