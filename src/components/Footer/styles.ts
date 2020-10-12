import styled from 'styled-components'

export const Container = styled.footer`
  background: ${({ theme }) => theme.footer.background};
  padding: 4rem 0;

  p {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`