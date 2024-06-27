import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  color: ${cores.branco};
  background-color: ${cores.branco};
  border: solid ${cores.rosa};
  border-width: 0px 1px 1px 1px;

  > img {
    display: block;
    width: 100%;
    max-height: 210px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardBody = styled.div`
  padding: 8px;
`

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  div {
    display: flex;
  }
`
export const Titulo = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  display: block;
  margin: 0;
  color: ${cores.rosa};
`

export const Score = styled.h3`
  width: 26px;
  height: 21px;
  display: block;
  margin: 0;
  margin-right: 4px;
  color: ${cores.rosa};
  font-weight: 700;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  font-weight: 400;
  margin-top: 16px;
  line-height: 22px;
  color: ${cores.rosa};
  margin-bottom: 16px;
`
export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${cores.rosa};
  border: transparent;
  padding: 4px 6px;
  width: 90px;
  margin-top: 8px;
  color: ${cores.branco};
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 16.41px;
`
export const Avaliacao = styled.div`
  display: flex;
  align-items: stretch;
  align-content: center;
`
