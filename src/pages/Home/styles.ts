import styled, { css } from 'styled-components'
import { Container } from '../../components/Grid'
import BgIntro from '../../assets/img/bg-intro.jpg'

interface ProdutoProps {
  type: 'paulista' | 'carioca' | 'mineiro'
}

export const Main = styled.main`
  padding: 150px 0;
  background: url(${BgIntro}) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #FFF;

  h1 {
    text-transform: uppercase;
    font-size: 6rem;
    &::after {
      content: '';
      display: block;
      margin: 1rem auto;
      width: 20px;
      height: 4px;
      background: #fff;
    }
  }

  p {
    font-size: 1.8rem;
    font-style: italic;
  }

  @media only screen and (max-width: 480px) {
    & {
      padding: 80px 0;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

export const Sobre = styled(Container)`
  padding: 6rem 0;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  p {
    font-style: italic;
    text-align: center;
    margin: 20px auto;
    max-width: 460px;
    line-height: 2.6rem;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 480px) {
    & {
      padding: 2rem 0;
    }
  }
`

export const Etiqueta = styled.h3`
  font-size: 3.25rem;
  line-height: 1em;
  background: #252525;
  width: 220px;
  color: #fff;
  font-style: italic;
  font-weight: normal;
  text-align: center;
  padding: 5px 0 10px 0;
  top: -25px;
  position: relative;
`

export const Produtos = styled.section`
  background: ${(props) => props.theme.produtos.background};
  padding: 6rem 0;
  border-top: 3px solid ${(props) => props.theme.produtos.borderColor};
  border-bottom: 3px solid ${(props) => props.theme.produtos.borderColor};

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media only screen and (max-width: 480px) {
    & {
      padding: 2rem 0;
    }
  }
`

export const Produto = styled.h2<ProdutoProps>`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 600;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background: currentColor;
    border-radius: 50%;
    margin: 20px auto;
    border: 5px solid #e7e4d8;
    
    ${(props) => {
    if (props.type === 'carioca') {
      return css`background: #c17139; box-shadow: 0 0 0 5px #c17139;`
    } else if (props.type === 'mineiro') {
      return css`background: #d7a54d; box-shadow: 0 0 0 5px #d7a54d;`
    } else {
      return css`background: #492901; box-shadow: 0 0 0 5px #492901;`
    }
  }}
  }
`

export const Locais = styled(Container)`
  padding: 4rem 0;

  & > div > div + div {
    margin-top: 6rem;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
    max-width: 320px;
    margin-bottom: 40px;
  }
`

export const Assine = styled.section`
  background: ${({ theme }) => theme.newsletter.background};
  padding: 3rem 0;
  
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-size: 1.8rem;
    font-style: italic;
  }
  
  form {
    display: flex;

    input {
      flex: 1;
      border: 3px solid #252525;
      background: none;
      font-size: 1.5em;
      font-style: italic;
      font-family: Georgia, serif;
      padding: 10px;
      outline: none;
      color: ${({ theme }) => theme.colors.text};
      &::placeholder {
        color: ${({ theme }) => theme.colors.text};
      }
    }

    button {
      background: #252525;
      border: none;
      font-family: Georgia, serif;
      text-transform: uppercase;
      font-size: 1.5em;
      flex:0 1 140px;
      padding: 13px 0;
      color: #fff;
      cursor: pointer;
    }
  }
  
`