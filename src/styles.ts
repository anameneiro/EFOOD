import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#FFFFFF',
  beige: '#FFF8F2',
  beigeDark: '#FFEBD9'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  smartphone: '480px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.pink};
  }

  .container{
    max-width: 1024px;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
