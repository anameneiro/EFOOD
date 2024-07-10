import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { Container } from '../../styles'
import { HeaderPerfil, HeaderR, HeaderTitle } from './styles'
import logo from '../../assets/imagens/logologo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  home?: boolean
}

export default function Header({ home }: Props) {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
              <HeaderPerfil onClick={openCart}>
                {items.length} produto(s) no carrinho
              </HeaderPerfil>
            </Container>
          </HeaderR>
        </>
      )}
    </>
  )
}
