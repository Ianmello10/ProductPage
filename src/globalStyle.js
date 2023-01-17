import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`

 * {
     
     margin: 0;
     padding: 0;
     box-sizing: border-box;
font-family: sans-serif;
    }

    body{
        height: 100vh;
    }

  :root { 
    --swiper-navigation-size : 25px
    

  }
 
 `

export default GlobalStyle