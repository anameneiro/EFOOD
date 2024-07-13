import styled from 'styled-components'
import { cores } from '../../styles'
import { CartContainer } from '../Cart/styles'

export const OrderContainer = styled(CartContainer)`
  &.is-open {
    display: flex;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 16px 8px;
  color: ${cores.branco};
`

export const Form = styled.form`
  display: block;
  margin: 0 8px;

  label {
    font-size: 14px;
    color: ${cores.branco};
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${cores.bege};
    border: 1px solid transparent;
    margin: 8px 0;
    padding: 8px;
    font-size: 14px;
    color: #4b4b4b;
    font-weight: bold;

    &.error {
      border: 1px solid gold;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: block;
      max-width: 155px;

      input {
        width: 155px;
      }
    }
  }
`
export const CardNumber = styled.input`
  width: 228px;
  &.error {
    border: 1px solid gold;
  }
`

export const Cvv = styled.input`
  display: block;
  width: 88px;
  &.error {
    border: 1px solid gold;
  }
`

export const OrderMessage = styled.section`
  font-size: 14px;
  color: ${cores.branco};
  margin: 0 8px 24px 8px;
`
