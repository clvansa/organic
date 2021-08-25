import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import Intro from "../components/Intro";
import Review from "../components/Review";
import Quality from "../components/Quality";
import Footer from "../components/Footer";

const Home = () => {
  const [ref, { entry, rootRef }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  return (
    <Containers fluid id="container" ref={rootRef}>
      <Box id="re" ref={ref}>
        <Intro isVisible={isVisible} />
      </Box>
      <Box>
        <Review />
        <Image src="https://www.aldi.lu/content/aldi/luxembourg/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/8276/1/0/_jcr_content/assets/imported-images/BILD_INTERNET1/8276-tomaten_2015.png/_jcr_content/renditions/opt.1250w.png.res/1628730385368/opt.1250w.png" />
      </Box>
      <Box>
        <Quality />
        <ImageEier src="/spaghetti.png" />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Containers>
  );
};

export default Home;

const Containers = styled(Container)`
  height: 100vh;
  overflow-y: scroll;
  width: 100vw !important;
  scroll-snap-type: y mandatory;
  padding: 0 !important;

  ::-webkit-scrollbar-thumb {
    background-color: rgba(110, 107, 107, 1);
    outline: 1px solid slategrey;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(110, 107, 107, 0.8);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
`;
const Box = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;

  :nth-child(1) {
    background-color: #f7f7f7;
    position: relative;
    color: #323232;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s all;
    flex-direction: column;

    background-image: url("https://www.pngitem.com/pimgs/m/492-4925862_wheat-vector-free-png-image-wheat-clipart-transparent.png");
    background-repeat: no-repeat;
  }
  :nth-child(2) {
    background-color: #323232;
    margin-top: 1px;
    position: relative;
  }
  :nth-child(3) {
    background-color: white;
    position: relative;
    padding: 10px;
    overflow: hidden;
  }
  :nth-child(4) {
    background-color: #ffd068;
    height: 50vh;
  }
`;

const Image = styled.img`
  width: 40vw;
  position: absolute;
  bottom: -15vw;
  right: 100px;
  /* overflow: hidden; */
  /* border: 1px solid white; */
  z-index: 1;
  min-width: 300px;
  @media (max-width: 767px) {
    bottom: -120px;
    right: 0;
  }
`;

const ImageEier = styled.img`
  position: absolute;
  width: 40%;
  left: -0;
  bottom: 0;
  z-index: 0;
`;
