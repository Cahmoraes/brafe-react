import styled from 'styled-components'

export const Container = styled.header`
  background: #252525;
  padding: 20px calc((100% - 960px) / 2);
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
  }
`