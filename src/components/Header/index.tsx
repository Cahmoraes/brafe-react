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
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#locais">Locais</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </Container>
  )
}

export default Header