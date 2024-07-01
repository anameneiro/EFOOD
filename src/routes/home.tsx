import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListaRestaurante from '../components/ListaRest'
import { Container } from '../styles'

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio?: Menu[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

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

export default Home
