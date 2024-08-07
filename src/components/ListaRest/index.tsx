import { ListRest } from './styles'
import { Container } from '../../styles'

import CardRestaurante from '../CardRest'

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
            id={restaurante.id}
            capa={restaurante.capa}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            descricao={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
          />
        ))}
      </ListRest>
    </Container>
  )
}

export default ListaRestaurante
