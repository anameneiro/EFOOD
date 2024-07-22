import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import lixeira from '../../assets/imagens/lixeira.png'

import { RootReducer } from '../../store'
import { close, openOrder, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardapioCont'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, comida) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += comida.preco!)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const openOrderAction = () => {
    dispatch(openOrder())
    dispatch(close())
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <S.List>
                {items.map((item) => (
                  <S.ListItem key={item.id}>
                    <S.Img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>{formataPreco(item.preco)}</p>
                    </div>
                    <S.Delete
                      onClick={() => removeItem(item.id)}
                      src={lixeira}
                      alt="botão de excluir"
                    />
                  </S.ListItem>
                ))}
              </S.List>
              <S.TotalPrice>
                <p>Valor total</p>
                <p>{formataPreco(getTotalPrice())}</p>
              </S.TotalPrice>
              <S.Button
                title="Clique para continuar com a entrega"
                onClick={openOrderAction}
              >
                Continuar com a entrega
              </S.Button>
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra.
            </p>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
