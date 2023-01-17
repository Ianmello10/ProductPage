import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

function SideBar(props) {
  return (
    <>
      <SideNavBar>
        <ul>
          <GrFormClose onClick={props.fecharMenu} className="close" />

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
      </SideNavBar>
    </>
  );
}

const SideNavBar = styled.div`
  display: flex;
  z-index: 50;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);

  padding: 10px;
  padding-left: 0;
  position: absolute;
  height: 100vh;
  flex-direction: column;

  .close {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }

  ul {
    position: absolute;
    top: 0;
    background-color: white;
    display: flex;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    list-style: none;
    padding: 10px;
    li {
      margin-top: 50px;
      margin-left: 5px;

      a {
        font-size: 15px;
        text-decoration: none;
        color: #797979;
        font-weight: bold;
      }
    }
  }
`;

export default SideBar;
