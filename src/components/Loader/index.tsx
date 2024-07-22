import { PropagateLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <Container>
      <PropagateLoader color={colors.pink} />
    </Container>
  )
}

export default Loader
