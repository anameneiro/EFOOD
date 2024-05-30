import styled from 'styled-components'

export const List = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  grid-row-gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 26px;
  }
`
