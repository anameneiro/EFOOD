import { Menu } from '../../routes/perfil'
import { List } from './styles'
import CardItens from '../CardapioCont' // Corrija essa linha se o caminho estiver errado

type Props = {
  produtos: Menu[]
}

const CardapioList = ({ produtos }: Props) => {
  return (
    <List>
      {produtos.map((cardapio) => (
        <div key={cardapio.id}>
          <CardItens
            id={cardapio.id}
            foto={cardapio.foto}
            nome={cardapio.nome}
            descricao={cardapio.descricao}
            preco={cardapio.preco}
            porcao={cardapio.porcao}
          />
        </div>
      ))}
    </List>
  )
}

export default CardapioList
