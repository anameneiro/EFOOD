import CardapioList from '../components/CardapioList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from '../styles'

const Perfil = () => {
  return (
    <>
      <Header />
      <Container>
        <CardapioList />
      </Container>
      <Footer />
    </>
  )
}

export default Perfil