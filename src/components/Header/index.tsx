import { CabecalhoHeader, Titulo, Logo } from './styles'
import logo from '../../assets/imagens/logologo.png'

const Header = () => (
  <CabecalhoHeader>
    <Logo src={logo} alt="Logotipo Efood" />
    <Titulo> Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </CabecalhoHeader>
)

export default Header
