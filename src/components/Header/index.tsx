import {
  HeaderPerfil,
  HeaderR,
  HeaderTitle,
  ImageContainer,
  RestaurantTitle
} from './styles'
import logo from '../../assets/imagens/logologo.png'
import { Container } from '../../styles'
import { Link } from 'react-router-dom'

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
              <HeaderPerfil>Restaurantes</HeaderPerfil>
              <Link to={'/'}>
                <img src={logo} alt="Logotipo Efood" />
              </Link>
              <HeaderPerfil>0 produto(s) no carrinho</HeaderPerfil>
            </Container>
          </HeaderR>
          <ImageContainer>
            <Container>
              <RestaurantTitle category>Italiana</RestaurantTitle>
              <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
            </Container>
          </ImageContainer>
        </>
      )}
    </>
  )
}
