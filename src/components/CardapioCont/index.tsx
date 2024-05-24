import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export default function CardItens({ title, description, image }: Props) {
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Button to={'/'}>Adicionar ao carrinho</S.Button>
    </S.Card>
  )
}
