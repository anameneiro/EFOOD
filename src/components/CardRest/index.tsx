import Tag from '../Tag'
import star from '../../assets/imagens/estrelastar.png'
import * as S from './styles'
import { Restaurantes } from '../../routes/home'

type Props = {
  imagem: string
  categoria: string
  titulo: string
  score: string
  descricao: string
  restaurantes: Restaurantes[]
  id: number
}

const CardRestaurante = ({
  imagem,
  categoria,
  titulo,
  score,
  descricao,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 187) + '...'
    }
    return descricao
  }
  return (
    <S.Card>
      <img src={imagem} alt={categoria} />
      <S.CardBody>
        <S.CardHead>
          <S.Titulo> {titulo}</S.Titulo>
          <S.Avaliacao>
            <S.Score> {score}</S.Score>
            <img src={star} alt="Star" />
          </S.Avaliacao>
        </S.CardHead>
        <S.Infos>
          <Tag> {categoria}</Tag>
        </S.Infos>
        <S.Description> {getDescricao(descricao)}</S.Description>
        <S.Button to={`/perfil/${id}`}> Saiba mais</S.Button>
      </S.CardBody>
    </S.Card>
  )
}

export default CardRestaurante
