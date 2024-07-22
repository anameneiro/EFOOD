import { useParams } from 'react-router-dom'

import { Container } from '../styles'

import { useGetPerfilQuery } from '../services/api'
import CardapioList from '../components/CardapioList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BannerPerfil from '../components/BannerPerfil'
import Checkout from '../components/Checkout'
import Loader from '../components/Loader'

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
    return <Loader />
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
