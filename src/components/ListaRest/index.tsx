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
          <div key={restaurante.id}>
            <CardRestaurante
              id={restaurante.id}
              imagem={restaurante.capa}
              titulo={restaurante.titulo}
              categoria={restaurante.tipo}
              descricao={restaurante.descricao}
              score={restaurante.avaliacao}
              restaurantes={[]}
            />
          </div>
        ))}
      </ListRest>
    </Container>
  )
}

export default ListaRestaurante
