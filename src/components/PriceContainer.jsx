import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { CountContext } from "./CountContext"
 
function PriceContainer() {
  const { count, setCount } = useContext(CountContext);

const [total , setTotal] = useState(0)

 
  function handleDecrement(){ 
         
    if(total > 0) { 
         
        setTotal(total - 1 )
    }
}

  return (
    <>
      <PriceContainerCart>
        <div className="price">
          <div className="mainPrice">
            <h1>$125.00</h1>
            <span className="off"> 50%</span>
          </div>

          <span className="priceOri">$250.00</span>
        </div>

        <div className="contentPrice">
          <div className="countProduct">
            <span>
              <AiOutlinePlus
                onClick={() => setTotal(total + 1)}
                className="icon"
              />
            </span>
            <span className="result">{total}</span>
            <span>
              <RiSubtractFill
                onClick={handleDecrement}
                className="icon"
              />
            </span>
          </div>

          <button   onClick={() => setCount(total + count)} className="btnCart">Add to cart</button>
        </div>
      </PriceContainerCart>
    </>
  );
}

const PriceContainerCart = styled.div`
  width: 90%;

  margin: 30px auto;

  .btnCart {
    color: white;
    font-weight: bold;
    border-radius: 6px;
    background-color: #ff8800;
    border: none;
    cursor: pointer;
  }

  .mainPrice {
    display: flex;
    width: 180px;
    justify-content: space-around;
    height: 100%;
    align-items: center;

    h1 {
      font-size: 30px;
    }

    .off {
      font-size: 14px;
      font-weight: bold;
      width: 40px;
      height: 22px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #ff8800;
      background-color: #ffe8be;
    }
  }

  .price {
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .priceOri {
      font-weight: bold;
      color: #a5a5a5;
    }
  }
  .contentPrice {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    width: 100%;

    button {
      display: block;
      margin-top: 25px;
      width: 300px;
      height: 40px;
    }

    .countProduct {
      width: 100%;
      height: 45px;
      display: flex;
      border-radius: 4px;
      align-items: center;
      background-color: #f7f1e9;
      color: #ff9e2e;
      justify-content: space-around;

      .icon {
        color: #ff9e2e;
        cursor: pointer;
      }

      .result {
        color: black;
        font-size: 22px;
      }

      span {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 32px;
      }
    }
  }

  @media (min-width: 825px) {
    .mainPrice {
      justify-content: stretch;

      .off {
        margin-left: 20px;
      }
    }

    .price {
      width: 100%;
      height: 50px;
      margin-top: 50px;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .priceOri {
        font-weight: bold;
        color: #a5a5a5;
      }
    }

    .contentPrice {
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      height: 70px;
      align-items: center;
      width: 90%;

      button {
        display: block;
        width: 250px;
        height: 40px;
        margin: 0;
      }

      .countProduct {
        width: 30%;
        height: 45px;
        display: flex;
        border-radius: 4px;
        align-items: center;
        background-color: #f7f1e9;
        color: #ff9e2e;
        justify-content: space-around;

        .icon {
          color: #ff9e2e;
        }

        .result {
          color: black;
          font-size: 22px;
        }

        span {
          display: flex;
          height: 100%;
          align-items: center;
          font-size: 32px;
        }
      }
    }
  }
`;

export default PriceContainer;
