import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  grid-row-gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    grid-template-columns: 1fr;
  }
`
