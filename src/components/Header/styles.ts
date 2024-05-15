import styled from 'styled-components'
import vetorbackground from '../../assets/imagens/banner.png'
import { cores } from '../../styles'

export const CabecalhoHeader = styled.header`
  background-image: url(${vetorbackground});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;
`
export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.rosa};
  max-width: 539px;
  width: 100%;
  text-align: center;

  @media (max-width: 615px) {
    font-size: 24px;
  }
`
