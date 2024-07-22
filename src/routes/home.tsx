import { Container } from '../styles'

import { useGetRestaurantesQuery } from '../services/api'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaRestaurante from '../components/ListaRest'

import Loader from '../components/Loader'

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
  return <Loader />
}

export default Home
