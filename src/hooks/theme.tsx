import React, { createContext, useState, useContext } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import IThemeProps from '../interface/IThemes'
import light from '../styles/themes/light'

interface IThemeContextData {
  setDefaultTheme(theme: IThemeProps): void
  defaultTheme: IThemeProps
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [defaultTheme, setDefaultTheme] = useState(light)
  return (
    <ThemeContext.Provider value={{
      defaultTheme,
      setDefaultTheme
    }}>
      <ThemeProviderStyled theme={defaultTheme}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

function useThemeProvider(): IThemeContextData {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useThemeProvider must be used inside a Context')
  return context
}

export { ThemeProvider, useThemeProvider }