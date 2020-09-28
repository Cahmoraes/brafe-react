import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkAnchor } from "react-scroll";

import Brafe from '../../assets/img/brafe.png'
import { Container } from './styles'

const Header: React.FC = () => {


  return (
    <Container>
      <Link to="/">
        <img src={Brafe} alt="Brafe" />
      </Link>
      <ul>
        <li><LinkAnchor smooth={true} duration={500} to="sobre">Sobre</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="produtos">Produtos</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="locais">Locais</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="contato">Contato</LinkAnchor></li>
      </ul>
    </Container>
  )
}

export default Header