import React from 'react'

import Logo from '../../assets/img/brafe.png'

import { Container as FooterContainer } from './styles'
import { Container, Column } from '../Grid'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <Column desktop={9} tablet={9}>
          <p>
            Este é um projeto da Origamid. Mais em origamid.com<br />
            Praia de Botafogo, 300, 5º andar - Botafogo - Rio de Janeiro
          </p>
        </Column>
        <Column desktop={3} tablet={3}>
          <img src={Logo} alt="Brafe" />
        </Column>
      </Container>
    </FooterContainer>
  )
}

export default Footer