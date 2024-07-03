import { Link } from 'react-router-dom'

import { Container } from '../../styles'
import { HeaderPerfil, HeaderR, HeaderTitle } from './styles'
import logo from '../../assets/imagens/logologo.png'

export type Props = {
  home?: boolean
}

export default function Header({ home }: Props) {
  return (
    <>
      {home ? (
        <HeaderR home>
          <Container>
            <Link to={'/'}>
              <img src={logo} alt="Logotipo Efood" />
            </Link>
            <HeaderTitle>
              Viva experiências gastronômicas no conforto da sua casa
            </HeaderTitle>
          </Container>
        </HeaderR>
      ) : (
        <>
          <HeaderR>
            <Container>
              <Link to={'/'}>
                <HeaderPerfil>Restaurantes</HeaderPerfil>
              </Link>
              <Link to={'/'}>
                <img src={logo} alt="Logotipo Efood" />
              </Link>
              <HeaderPerfil>0 produto(s) no carrinho</HeaderPerfil>
            </Container>
          </HeaderR>
        </>
      )}
    </>
  )
}
