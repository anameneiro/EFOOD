import React, { useState } from 'react'
import { Menu } from '../../routes/perfil'
import * as S from './styles'
import close from '../../assets/imagens/close.png'

const CardItens = ({ foto, nome, descricao, porcao, preco, id }: Menu) => {
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

  const closeModal = () => {
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
      <S.Button to="" onClick={() => setModal({ isVisible: true })}>
        Adicionar ao carrinho
      </S.Button>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img src={close} alt="foto" onClick={closeModal} />
          <div>
            <img src={foto} alt="foto" onClick={closeModal} />
          </div>
          <S.InfosContainer>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <S.ButtonModal>Adicionar ao carrinho R$ {preco}</S.ButtonModal>
          </S.InfosContainer>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </S.Card>
  )
}

export default CardItens
