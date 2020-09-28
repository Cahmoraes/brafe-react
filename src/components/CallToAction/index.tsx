import React from 'react'
import { LinkProps } from 'react-router-dom'

import { Container } from './styles'


const CallToAction: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>{children}</Container>
  )
}

export default CallToAction