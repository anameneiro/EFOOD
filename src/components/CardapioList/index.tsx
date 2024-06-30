import React from 'react'
import { List } from './styles'
import CardItens from '../CardapioCont' // Corrija essa linha se o caminho estiver errado
import { Cardapio } from '../CardapioCont' // Importando o tipo corretamente

type Props = {
  cardapios: Cardapio[]
}

const CardapioList: React.FC<Props> = ({ cardapios }) => {
  return (
    <List>
      {cardapios.map((cardapio) => (
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
