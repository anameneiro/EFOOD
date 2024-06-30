import React, { useEffect, useState } from 'react'
import CardapioList from '../components/CardapioList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from '../styles'
import { Cardapio } from '../components/CardapioCont' // Importando o tipo corretamente

const Perfil: React.FC = () => {
  const [cardapios, setCardapios] = useState<Cardapio[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        console.log('Dados recebidos da API:', data)
        const allCardapios: Cardapio[] = data.flatMap(
          (restaurante: any) => restaurante.cardapio
        )
        setCardapios(allCardapios)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching cardapios:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Container>
        <CardapioList cardapios={cardapios} />
      </Container>
      <Footer />
    </>
  )
}

export default Perfil
