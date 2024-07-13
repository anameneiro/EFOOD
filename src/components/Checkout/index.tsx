import * as S from './styles'
import { Overlay, SideBar } from '../Cart/styles'

const Checkout = () => {
  return (
    <>
      <S.OrderContainer>
        <Overlay />
        <SideBar>
          <S.Form>
            <section>
              <S.Title> Entrega </S.Title>
              <label htmlFor="fullname"> Quem irá receber</label>
              <input type="text" id="fullname" />
              <label htmlFor="address">Endereço</label>
              <input type="text" id="address" />
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" />
              <div>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input type="text" id="zipCode" />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input type="text" name="number" id="number" />
                </div>
              </div>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" name="complement" id="complement" />
              <button type="button"> Continuar com o pagamento</button>
              <button type="button"> Voltar para o carrinho</button>
            </section>
          </S.Form>
        </SideBar>
      </S.OrderContainer>
    </>
  )
}

export default Checkout
