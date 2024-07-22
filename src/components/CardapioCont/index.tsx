import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import close from '../../assets/imagens/close.png'

import { Menu } from '../../routes/perfil'
import { add, open } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CardItens = ({ foto, nome, descricao, porcao, preco, id }: Menu) => {
  const dispatch = useDispatch()

  const menu: Menu = {
    id,
    foto,
    nome,
    descricao,
    porcao,
    preco
  }
  const [modal, setModal] = useState<{ isVisible: boolean }>({
    isVisible: false
  })

  const handleAddToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    setModal({ isVisible: false })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={foto} alt="imagem da foto" />
      <S.Title>{nome}</S.Title>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <S.Button
        title="Clique para adicionar o item ao carrinho"
        to=""
        onClick={() => setModal({ isVisible: true })}
      >
        Adicionar ao carrinho
      </S.Button>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img
            title="Clique aqui para fechar"
            src={close}
            alt="foto"
            onClick={() => setModal({ isVisible: false })}
          />
          <div>
            <img
              src={foto}
              alt="foto"
              onClick={() => setModal({ isVisible: false })}
            />
          </div>
          <S.InfosContainer>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <S.ButtonModal
              title="Clique para adicionar o item ao carrinho"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho R$ {formataPreco(preco)}
            </S.ButtonModal>
          </S.InfosContainer>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </S.Modal>
    </S.Card>
  )
}

export default CardItens
