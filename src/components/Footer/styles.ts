import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beigeDark};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Sociais = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px 0;
`
export const Link = styled.a`
  text-decoration: none;
`
export const Description = styled.p`
  width: 480px;
  color: ${colors.pink};
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
