import React, { useState, useRef, useEffect, useCallback, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkAnchor } from "react-scroll";

import debounce from '../../utils/debounce'
import Brafe from '../../assets/img/brafe.png'
import { Container } from './styles'
import { useThemeProvider } from '../../hooks/theme';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

const Header: React.FC = () => {
  const menu = useRef<HTMLUListElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [themeStoraged, setThemeStoraged] = useState(() => {
    const theme = localStorage.getItem('@themestoraged')
    if (theme) return JSON.parse(theme)
    return null
  })

  const { setDefaultTheme, defaultTheme } = useThemeProvider()

  useEffect(() => {
    if (themeStoraged)
      setDefaultTheme(themeStoraged)
  }, [themeStoraged, setDefaultTheme])

  const captalize = useCallback((text: string) => {
    return text[0].toUpperCase() + text.slice(1)
  }, [])

  const verifyMobile = useCallback(() => {
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

  const handleTheme = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (defaultTheme.title === 'light') {
      setDefaultTheme(dark)
      window.localStorage.setItem('@themestoraged', JSON.stringify(dark))
    } else {
      setDefaultTheme(light)
      window.localStorage.setItem('@themestoraged', JSON.stringify(light))
    }

  }, [defaultTheme.title, setDefaultTheme])

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
        <li><a href="/" onClick={handleTheme}>{captalize(defaultTheme.title)}</a></li>
      </ul>
    </Container>
  )
}

export default Header