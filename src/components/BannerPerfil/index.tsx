import { Restaurantes } from '../../routes/home'
import { BannerP } from './styles'

type Props = {
  restaurante: Restaurantes
}

const BannerPerfil = ({ restaurante }: Props) => {
  return (
    <>
      <BannerP style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <p>{restaurante.tipo}</p>
          <h2>{restaurante.titulo}</h2>
        </div>
      </BannerP>
    </>
  )
}

export default BannerPerfil
