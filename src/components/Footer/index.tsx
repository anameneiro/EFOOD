import * as S from './styles'

import logo from '../../assets/imagens/logologo.png'
import insta from '../../assets/imagens/insta.png'
import face from '../../assets/imagens/face.png'
import x from '../../assets/imagens/x.png'

const Footer = () => (
  <S.Container>
    <img src={logo} alt="efood" />
    <S.Sociais>
      <li>
        <S.Link title="Clique para ir até nosso perfil do instagram" href="#">
          <img src={insta} alt="Logotipo instagram" />
        </S.Link>
      </li>
      <li>
        <S.Link title="Clique para ir até nosso perfil do facebook" href="#">
          <img src={face} alt="Logotipo facebook" />
        </S.Link>
      </li>
      <li>
        <S.Link title="Clique para ir até nosso perfil do twitter" href="#">
          <img src={x} alt="Logotipo twitter" />
        </S.Link>
      </li>
    </S.Sociais>
    <S.Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Description>
  </S.Container>
)

export default Footer
