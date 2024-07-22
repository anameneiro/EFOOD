import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import logo from '../../assets/imagens/logologo.png'

import { open } from '../../store/reducers/cart'
import { Container } from '../../styles'
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
        <S.HeaderR home>
          <Container>
            <Link to={'/'}>
              <img
                title="Clique para ir até nossa página principal"
                src={logo}
                alt="Logotipo Efood"
              />
            </Link>
            <S.HeaderTitle>
              Viva experiências gastronômicas no conforto da sua casa
            </S.HeaderTitle>
          </Container>
        </S.HeaderR>
      ) : (
        <>
          <S.HeaderR>
            <Container>
              <Link title="Clique para ir até nossa página principal" to={'/'}>
                <S.HeaderPerfil>Restaurantes</S.HeaderPerfil>
              </Link>
              <Link title="Clique para ir até nossa página principal" to={'/'}>
                <img src={logo} alt="Logotipo Efood" />
              </Link>
              <S.HeaderPerfil
                title="Clique aqui para abrir nosso carrinho"
                onClick={openCart}
              >
                {items.length} produto(s) no carrinho
              </S.HeaderPerfil>
            </Container>
          </S.HeaderR>
        </>
      )}
    </>
  )
}
