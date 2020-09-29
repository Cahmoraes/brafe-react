import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkAnchor } from "react-scroll";

import debounce from '../../utils/debounce'
import Brafe from '../../assets/img/brafe.png'
import { Container } from './styles'

const Header: React.FC = () => {
  const menu = useRef<HTMLUListElement>(null)

  const [isMobile, setIsMobile] = useState(false)

  const verifyMobile = useCallback(() => {
    console.log('aqui')
    window.matchMedia('(max-width:480px)').matches ?
      setIsMobile(true) : setIsMobile(false)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', debounce(verifyMobile))
    verifyMobile()
    return () => {
      window.removeEventListener('resize', debounce(verifyMobile))
    }
  }, [verifyMobile])

  const toggleMenu = useCallback(() => {
    if (!isMobile) {
      return
    } else {
      menu.current?.classList.toggle('active')
    }
  }, [isMobile])

  return (
    <Container>
      <Link to="/">
        <img src={Brafe} alt="Brafe" />
      </Link>
      <ul ref={menu} onClick={toggleMenu}>
        <li><LinkAnchor smooth={true} duration={500} to="sobre">Sobre</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="produtos">Produtos</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="locais">Locais</LinkAnchor></li>
        <li><LinkAnchor smooth={true} duration={500} to="contato">Contato</LinkAnchor></li>
      </ul>
    </Container>
  )
}

export default Header