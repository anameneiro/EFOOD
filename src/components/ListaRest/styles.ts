import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListRest = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  grid-row-gap: 48px;
  padding-top: 80px;
  padding-bottom: 120px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
    grid-template-columns: 1fr;
  }
`
