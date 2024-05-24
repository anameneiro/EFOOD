import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border-width: 0 1px 1px 1px;
  padding: 8px;

  img {
    height: 167px;
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  font-weight: 400;
  margin-top: 16px;
  line-height: 22px;
`

export const Button = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 4px 0;
  background-color: ${cores.begeEscuro};
  border: transparent;
  width: 100%;
  margin-top: 8px;
  color: ${cores.rosa};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`
