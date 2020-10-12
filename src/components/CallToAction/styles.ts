import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled(Link)`
    font-size: 1.8em;
    text-transform: uppercase;
    text-decoration: none;
    border: 3px solid;
    color: ${({ theme }) => theme.callToAction.color};
    padding: 10px 20px;
    cursor: pointer;
`