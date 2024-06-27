import { useState } from 'react'
import * as S from './styles'
import close from '../../assets/imagens/close.png'

type ModalState = {
  isVisible: boolean
}

type Props = {
  title: string
  description: string
  image: string
}

export default function CardItens({ title, description, image }: Props) {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button
        to={''}
        onClick={() => {
          setModal({
            isVisible: true
          })
        }}
      >
        Adicionar ao carrinho
      </S.Button>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img
            src={close}
            alt="foto"
            onClick={() => {
              closeModal()
            }}
          />
          <div>
            <img
              src={image}
              alt="foto"
              onClick={() => {
                closeModal()
              }}
            />
          </div>
          <S.InfosContainer>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: 2 a 3 pessoas</p>
            <S.ButtonModal>Adicionar ao carrinho</S.ButtonModal>
          </S.InfosContainer>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </S.Card>
  )
}
