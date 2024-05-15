import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFFFFF',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.rosa}
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
