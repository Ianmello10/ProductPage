import React from "react";
import styled from "styled-components";

function ProductDescription() {
  return (
    <>
      <ContainerDescription>
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae
          asperiores, iste nihil accusantium dolore quas repellendus molestiae
          veniam recusandae corporis perspiciatis fugi 
           
        </p>
      </ContainerDescription>
    </>
  );
}

const ContainerDescription = styled.article` 

width: 90%;
margin: 40px auto;


h1{
     font-size: 26px;
     margin-top: 10px;
}

h2{  color: #ca8f22;
     font-size: 16px;
}
 p{ 
     margin-top: 10px;
     line-height: 22px;

 }


 @media (min-width: 825px) {
   
  width: 90%;

  h1{
     font-size: 42px;
     margin-top: 10px;
}

h2{  color: #ca8f22;
     font-size: 18px;
     margin-top: 50px;
}
 p{ 
     margin-top: 10px;
     line-height: 22px;

 }

  }
 `;

 
export default ProductDescription;
