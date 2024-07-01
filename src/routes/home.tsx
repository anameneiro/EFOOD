import { useGetRestaurantesQuery } from '../services/api'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaRestaurante from '../components/ListaRest'
import { Container } from '../styles'

export type Restaurantes = {
  data: Restaurantes[]
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: string
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()
  if (restaurantes) {
    return (
      <>
        <Header home />
        <Container>
          <ListaRestaurante restaurantes={restaurantes} />
        </Container>
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
