import { useParams } from 'react-router-dom'
import { useGetPerfilQuery } from '../services/api'

import CardapioList from '../components/CardapioList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from '../styles'

export type Menu = {
  id: number
  foto: string
  preco: string
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetPerfilQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Container>
        <CardapioList produtos={restaurant.cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default Perfil
