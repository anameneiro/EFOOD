import CardRestaurante from '../CardRest'
import { ListRest } from './styles'

import japones from '../../assets/imagens/japones.png'
import italiano from '../../assets/imagens/italiano.png'
import { Container } from '../../styles'
import Restaurante from '../../models/restaurant'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    imagem: japones,
    titulo: 'Hioki Sushi',
    categoria: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    score: '4.9'
  },
  {
    id: 2,
    imagem: italiano,
    titulo: 'La Dolce Vita Trattoria',
    categoria: 'Italiano',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    score: '4.6'
  },
  {
    id: 3,
    imagem: italiano,
    titulo: 'La Dolce Vita Trattoria',
    categoria: 'Italiano',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    score: '4.6'
  },
  {
    id: 4,
    imagem: italiano,
    titulo: 'La Dolce Vita Trattoria',
    categoria: 'Italiano',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    score: '4.6'
  },
  {
    id: 5,
    imagem: italiano,
    titulo: 'La Dolce Vita Trattoria',
    categoria: 'Italiano',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    score: '4.6'
  },
  {
    id: 6,
    imagem: italiano,
    titulo: 'La Dolce Vita Trattoria',
    categoria: 'Italiano',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    score: '4.6'
  }
]

const ListaRestaurante = () => {
  return (
    <Container>
      <ListRest>
        {restaurantes.map((restaurante) => (
          <CardRestaurante
            key={restaurante.id}
            imagem={restaurante.imagem}
            titulo={restaurante.titulo}
            categoria={restaurante.categoria}
            descricao={restaurante.descricao}
            score={restaurante.score}
          />
        ))}
      </ListRest>
    </Container>
  )
}

export default ListaRestaurante
