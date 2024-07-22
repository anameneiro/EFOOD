import Tag from '../Tag'
import star from '../../assets/imagens/estrelastar.png'
import * as S from './styles'

type Props = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const CardRestaurante = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 187) + '...'
    }
    return descricao
  }
  return (
    <S.Card>
      <img src={capa} alt={tipo} />
      <S.CardBody>
        <S.CardHead>
          <S.Titulo> {titulo}</S.Titulo>
          <S.Avaliacao>
            <S.Score> {avaliacao}</S.Score>
            <img src={star} alt="Star" />
          </S.Avaliacao>
        </S.CardHead>
        <S.Infos>
          <Tag> {tipo}</Tag>
        </S.Infos>
        <S.Description> {getDescricao(descricao)}</S.Description>
        <S.Button
          title="Clique para visualizar o cardápio do restaurante"
          to={`/perfil/${id}`}
        >
          {' '}
          Saiba mais
        </S.Button>
      </S.CardBody>
    </S.Card>
  )
}

export default CardRestaurante
