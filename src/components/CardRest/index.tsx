import Tag from '../Tag'
import star from '../../assets/imagens/estrelastar.png'
import {
  Avaliacao,
  Button,
  Card,
  CardBody,
  CardHead,
  Description,
  Infos,
  Score,
  Titulo
} from './styles'

type Props = {
  titulo: string
  categoria: string
  descricao: string
  score: string
  imagem: string
}

const CardRestaurante = ({
  titulo,
  categoria,
  descricao,
  score,
  imagem
}: Props) => {
  return (
    <Card>
      <img src={imagem} alt={categoria} />
      <CardBody>
        <CardHead>
          <Titulo> {titulo}</Titulo>
          <Avaliacao>
            <Score> {score}</Score>
            <img src={star} alt="Star" />
          </Avaliacao>
        </CardHead>
        <Infos>
          <Tag> {categoria}</Tag>
        </Infos>
        <Description> {descricao}</Description>
        <Button to={'/perfil'}> Saiba mais</Button>
      </CardBody>
    </Card>
  )
}

export default CardRestaurante
