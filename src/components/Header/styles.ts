import styled from 'styled-components'

export const Container = styled.header`
  background: #252525;
  padding: 20px calc((100% - 960px) / 2);
  width: 100%;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;

  ul {
    color: #FFF;
    display: flex;
    & li + li {
      margin-left: 2rem;
    }
    a {
      color: #FFF;
      cursor: pointer;
      &:visited {
        color: #FFF;
      }
    }
  }

  @media only screen and (max-width: 960px) {
    & {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media only screen and (max-width: 480px) {
    ul::before {
      content: '';
      height: 3px;
      width: 25px;
      box-shadow: 0 7px, 0 -7px;
      border-radius: 5px;
      background: #FFF;
      display: block;
      margin-left: 70px;
    }

    ul.active {
      display: block;
      position: absolute;
      right: 0;
      top: 37px;
      width: 115px;
      background: #252525;
    
      & li + li {
        margin-left: 10px;
        margin-top: 10px;
      }

      li {
        display: block;
        margin-top: 20px;
        margin-left: 10px;
        padding: 4px;
      }
    }
    
    li {
      display: none;
    }
  }
`