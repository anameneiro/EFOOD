import logo from '../../assets/imagens/logologo.png'
import insta from '../../assets/imagens/insta.png'
import face from '../../assets/imagens/face.png'
import x from '../../assets/imagens/x.png'
import { Container, Link, Sociais, Description } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="efood" />
    <Sociais>
      <li>
        <Link href="#">
          <img src={insta} alt="Logotipo instagram" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <img src={face} alt="Logotipo facebook" />
        </Link>
      </li>
      <li>
        <Link href="#">
          <img src={x} alt="Logotipo twitter" />
        </Link>
      </li>
    </Sociais>
    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </Container>
)

export default Footer
