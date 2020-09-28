import React from 'react'
import { Link } from 'react-router-dom'

import Brafe from '../../assets/img/brafe.png'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Brafe} alt="Brafe" />
      </Link>
      <ul>
        <li>Sobre</li>
        <li>Produtos</li>
        <li>Portfólio</li>
        <li>Contato</li>
      </ul>
    </Container>
  )
}

export default Header