import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box; 
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: Georgia, sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  h1,h2,h3,h4,h5,h6 {
    font: 400 1.6rem Georgia, serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 60%;
    }
  }
`


export default GlobalStyles