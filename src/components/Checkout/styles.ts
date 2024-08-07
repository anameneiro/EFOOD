import styled from 'styled-components'
import { colors } from '../../styles'
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
  color: ${colors.white};
`

export const Form = styled.form`
  display: block;
  margin: 0 8px;
  margin-bottom: 24px;

  label {
    font-size: 14px;
    color: ${colors.white};
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.beige};
    border: 1px solid transparent;
    margin: 8px 0;
    padding: 8px;
    font-size: 14px;
    color: #4b4b4b;
    font-weight: bold;

    &.error {
      border: 2px solid red;
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
    border: 1px solid green;
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
  color: ${colors.white};
  margin: 0 8px 24px 8px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  width: 100%;
  text-decoration: none;
  background-color: ${colors.beige};
  color: ${colors.pink};
  margin-top: 8px;
  cursor: pointer;
`
