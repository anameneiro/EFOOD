import CardRestaurante from '../CardRest'
import { ListRest } from './styles'

import { Container } from '../../styles'
import { Restaurantes } from '../../routes/home'

type Props = {
  restaurantes: Restaurantes[]
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  return (
    <Container>
      <ListRest>
        {restaurantes.map((restaurante) => (
          <CardRestaurante
            key={restaurante.id}
            imagem={restaurante.capa}
            titulo={restaurante.titulo}
            categoria={restaurante.tipo}
            descricao={restaurante.descricao}
            score={restaurante.avaliacao}
          />
        ))}
      </ListRest>
    </Container>
  )
}

export default ListaRestaurante
