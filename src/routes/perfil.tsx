import { useParams } from 'react-router-dom'
import { useGetPerfilQuery } from '../services/api'

import CardapioList from '../components/CardapioList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from '../styles'
import BannerPerfil from '../components/BannerPerfil'
import Checkout from '../components/Checkout'

export type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetPerfilQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <BannerPerfil restaurante={restaurant} />
      <Container>
        <CardapioList produtos={restaurant.cardapio} />
      </Container>
      <Checkout />
      <Footer />
    </>
  )
}

export default Perfil
