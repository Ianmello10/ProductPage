import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SideBar from "../components/SideBar";
import { CountContext } from "./CountContext";

import avatar from "../assets/ecommerce-product-page-main/images/image-avatar.png";
import ModalCart from "./ModalCart";

function NavMenu() {
  const { count, setCount } = useContext(CountContext);

  const [isOpen, setIsOpen] = useState(false);

  const [shopCart, setShopCart] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);

    console.log("abri menu");
  };

  const shopCartClick = () => {
    setShopCart(!shopCart);
  };

  return (
    <>
      <MenuMobile>
        <div className="navContent">
          <AiOutlineMenu className="menuHamb" onClick={handleClick} />
          <h1>Sneakers</h1>
          <ul className="links">
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="cartDiv">
          <div className="nProduct">{count}</div>

          <AiOutlineShoppingCart onClick={shopCartClick} className="iconCart" />
          <img src={avatar} />
        </div>
      </MenuMobile>

      {shopCart && <ModalCart />}

      {isOpen && <SideBar fecharMenu={() => setIsOpen(false)} />}
    </>
  );
}

const MenuMobile = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: white;
  position: relative;

  .links {
    display: none;
  }

  .nProduct {
    position: absolute;
    top: 0;
    padding: 4px;
    margin-top: 22px;
    margin-right: 38px;
    border-radius: 100px;
    font-size: 12px;
    width: 14px;
    height: 14px;
    background-color: orange;
  }

  div {
    display: flex;
    width: 150px;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }

  .cartDiv {
    width: 120px;
    display: flex;
    justify-content: space-around;

    img {
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 825px) {
    .menuHamb {
      display: none;
    }

    .iconCart {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .links {
      display: flex;
      width: 90%;
      align-items: center;
      list-style: none;
      height: 100%;

      li {
        text-align: center;
        width: auto;
        margin-left: 60px;

        a {
          font-size: 15px;
          text-decoration: none;
          color: #797979;
          font-weight: bold;
          transition: color ease .5s;
        }
        a:hover{ 
            
           color: orange;
        }
      }
    }

    .navContent {
      padding-left: 20px;
      margin-left: 80px;
      width: 60%;
      display: flex;
      height: 100%;
      align-items: center;
    }
  }
`;

export default NavMenu;
