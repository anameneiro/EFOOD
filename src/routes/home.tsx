import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaRestaurante from '../components/ListaRest'
import { Container } from '../styles'

const Home = () => {
  return (
    <>
      <Header home />
      <Container>
        <ListaRestaurante />
      </Container>
      <Footer />
    </>
  )
}

export default Home
