import React from "react";
import styled from "styled-components";

function Footer() {
  return (
      <MainFooter>
        <p> © Copyright 2022 by Ian.Feito com ♥ por Lucas.</p>
      </MainFooter>
  );
}

const MainFooter = styled.footer`
  width: 100%;
  height: 70px; 
  margin:  120px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
  }
`;

export default Footer;
