import React from "react";
import styled from "styled-components";
import SlideProducts from "./SlideProducts";
import PriceContainer from "./PriceContainer";
import ProductDescription from "./ProductDescription";
function Container() {
  return (
    <ContainerMain>
      <SlideProducts />
      <div className="subContainer">
        <ProductDescription />

        <PriceContainer />
      </div>
    </ContainerMain>
  );
}

const ContainerMain = styled.div`
  @media (min-width: 825px) {
    width: 90%;

    margin: 50px auto;
    display: flex;
    justify-content: space-around;

    .subContainer {
      width: 90%;
    }
  }

  @media (min-width: 1350px) {
    width: 80%;

    margin: 50px auto;
    display: flex;
    justify-content: space-around;

    .subContainer {
      width: 90%;
    }
  }
`;

export default Container;
