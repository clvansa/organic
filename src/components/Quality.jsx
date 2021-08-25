import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const Quality = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Row>
        <Col xs={12} md={6} style={{ position: "relative" }}></Col>
        <Col
          xs={12}
          md={5}
          style={{ position: "relative", zIndex: 1, paddingLeft: "20px" }}
        >
          <Title>Quality</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque
            aliquam mollitia sequi praesentium repellat, illum vitae accusantium
            neque, culpa eos delectus. Non, eum molestias rem ratione ea odit!
            aliquam mollitia sequi praesentium repellat, illum vitae accusantium
            neque
          </Subtitle>
          <Button>Make an order</Button>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque
            aliquam mollitia sequi praesentium repellat, illum vitae accusantium
            Ea?
          </Subtitle>
          <Subtitle>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </Subtitle>
        </Col>
      </Row>
    </div>
  );
};

export default Quality;

const Title = styled.h1`
  font-size: 5vw;
  color: #323232;
  font-weight: bold;
  z-index: 20 !important;
`;
const Subtitle = styled.p`
  padding-top: 20px;
  color: #bbb;
  z-index: 20;
  width: 80%;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #ffd068;
  text-transform: uppercase;
  font-weight: 600;
`;
