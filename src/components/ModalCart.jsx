import React, { useContext } from "react";
import styled from "styled-components";
import imgSlide from "../assets/ecommerce-product-page-main/images/image-product-1.jpg";
import { CountContext } from "./CountContext";
import { BsFillTrashFill } from "react-icons/bs";

function ModalCart(props) {
  const { count, setCount } = useContext(CountContext);

  const deleteAll = () => {
    setCount(0);
  };

  const totalCount = props.totalCount;

  const productPrice = 125;

  const totalPrice = productPrice * count;

  return (
    <>
      <ModalShopCart>
        <h1>Cart</h1>{" "}
        {totalPrice ? (
           (
            <>
              <div className="info">
                <img src={imgSlide} />
                <div className="col">
                  <h2>Price Shoes</h2>

                  <div className="row">
                    <p className="priceResult">
                      ${productPrice} x {count} = {totalPrice}
                    </p>

                    <div>
                      <BsFillTrashFill className="trash" onClick={deleteAll} />
                    </div>
                  </div>
                </div>
              </div>

        <button>Checkout</button> 

            </>
          )
        ) : (
          <> 
           <h3>Adicione um produto ao carrinho</h3> 
            <span></span>
           </>
        )}
      </ModalShopCart>
    </>
  );
}

const ModalShopCart = styled.div`
  .row {
    display: flex;
    margin-top: 10px;
    height: 24px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  width: 95%;
  margin: 10px auto;

  position: absolute;
  z-index: 100;

  padding: 10px;
  right: 0;
  margin-right: 10px;
  border-radius: 6px;
  height: 200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  background-color: white;

  .trash {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  .priceResult {
    color: #8b8b8b;
    font-weight: bold;
  }
  h1 {
    font-size: 18px;
    margin-top: 10px;
  }

  h3{ 
    font-size: 19px;
     margin-top: 30px;
     text-align: center;
  }

  span{ 
     display: block;
     width: 90%;
     margin:  25px auto;
     border-bottom: solid 1px #9c9c9c;
  }

  .info {
    display: flex;
    height: 40px;
    margin-top: 12px;
    align-items: center;
  }

  img {
    width: 50px;
    height: 40px;
  }

  .col {
    margin-left: 20px;
    width: 60%;
  }

  button {
    width: 90%;
    display: block;
    appearance: none;
    border: none;
    height: 36px;
    border-radius: 6px;
    background-color: #ff8800;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    margin: 26px auto;
  }

  @media (min-width: 725px) {
    width: 380px;
    position: absolute;
    padding: 10px;
    right: 0;
    margin-right: 10px;
    border-radius: 6px;
    height: 200px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    background-color: white;

    h1 {
      font-size: 18px;
      margin-top: 10px;
    }

    .info {
      display: flex;
      height: 40px;
      margin-top: 12px;
      align-items: center;
    }

    img {
      width: 50px;
      height: 40px;
    }

    .col {
      margin-left: 20px;
    }

    button {
      width: 90%;
      display: block;
      appearance: none;
      border: none;
      height: 36px;
      border-radius: 6px;
      background-color: #ff8800;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      cursor: pointer;
      margin: 26px auto;
    }
  }
`;

export default ModalCart;
