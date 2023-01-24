import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
      
    }

    header{
        background-image: url(${({ theme }) => theme.background.img});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 35vh;
    }

    h1{
        font-size: 26px;
        text-align: center;
        color: white;
        padding: 1.2rem 0;
    }

    @media (min-width: 568px) {
        header{
            height:29vh;
            min-width: 360px;
        }

  }
`;

export default GlobalStyles;
