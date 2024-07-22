import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from './styles'

import { Overlay, SideBar } from '../Cart/styles'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { closeOrder, open, clear } from '../../store/reducers/cart'
import { formataPreco } from '../CardapioCont'

const Checkout = () => {
  const { isOrderOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [continuarPagamento, setContinuarPagamento] = useState(false)
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter no minimo 5 caracteres')
        .required('O nome é obrigatório'),
      address: Yup.string()
        .min(10, 'Endereço inválido')
        .required('Endereço obrigatório'),
      city: Yup.string()
        .min(5, 'Endereço inválido')
        .required('Endereço obrigatório'),
      zipCode: Yup.string()
        .min(9, 'Cep inválido')
        .required('O cep é obrigatório'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Número obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        continuarPagamento ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            complement: values.complement,
            number: Number(values.number)
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const closeOrderAndCart = () => {
    dispatch(closeOrder())
    setPagamentoConcluido(false)
  }

  const addToCart = () => {
    dispatch(open())
    dispatch(closeOrder())
  }

  const payment = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setContinuarPagamento(true)
      }
    })
  }

  const getTotalPrice = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return items.reduce((acumulador: any, valorAtual: { preco: any }) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (data?.orderId) {
      setPagamentoConcluido(true)
    }
  }, [data?.orderId])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      <S.OrderContainer className={isOrderOpen ? 'is-open' : ''}>
        <Overlay />
        <SideBar>
          <S.Form onSubmit={form.handleSubmit}>
            {!pagamentoConcluido ? (
              !continuarPagamento ? (
                <section>
                  <S.Title> Entrega </S.Title>
                  <label htmlFor="fullName"> Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                  <div>
                    <div>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Número</label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </div>
                  </div>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                  <S.Button
                    title="Clique para continuar com o pagamento"
                    onClick={payment}
                    type="button"
                  >
                    {' '}
                    Continuar com o pagamento
                  </S.Button>
                  <S.Button
                    title="Clique para voltar ao carrinho"
                    onClick={addToCart}
                    type="button"
                  >
                    {' '}
                    Voltar para o carrinho
                  </S.Button>
                </section>
              ) : (
                <section>
                  <S.Title>
                    <>
                      Pagamento - Valor a pagar R${' '}
                      {formataPreco(getTotalPrice().toFixed(2))}
                    </>
                  </S.Title>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                  <div>
                    <div>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        name="expiresMonth"
                        type="text"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        name="expiresYear"
                        type="text"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                  </div>
                  <S.Button
                    title="Clique para finalizar o pagamento"
                    type="submit"
                  >
                    {' '}
                    Finalizar o pagamento
                  </S.Button>
                  <S.Button
                    title="Clique para voltar para a edição de endereço"
                    onClick={() => setContinuarPagamento(false)}
                  >
                    Voltar para a edição de endereço
                  </S.Button>
                </section>
              )
            ) : (
              <section>
                <S.Title>Pedido realizado - {data?.orderId}</S.Title>
                <S.OrderMessage>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <br />
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <br />
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <br />
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </S.OrderMessage>
                <S.Button
                  title="Clique para concluir"
                  onClick={closeOrderAndCart}
                >
                  Concluir
                </S.Button>
              </section>
            )}
          </S.Form>
        </SideBar>
      </S.OrderContainer>
    </>
  )
}

export default Checkout
