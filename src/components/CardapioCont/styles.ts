import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border-width: 0 1px 1px 1px;
  padding: 8px;

  img {
    height: 167px;
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  line-height: 19px;
  font-size: 16px;
  display: block;
  margin: 0;
  padding-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  font-weight: 400;
  padding-top: 8px;
  line-height: 22px;
`

export const Button = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 4px 0;
  background-color: ${cores.begeEscuro};
  border: transparent;
  width: 100%;
  margin-top: 8px;
  color: ${cores.rosa};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  max-height: 100%;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 32px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  margin-bottom: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
    width: 280px;
  }

  > img {
    width: 16px;
    height: 16px;
    position: absolute;

    top: 10px;
    right: 10px;
    cursor: pointer;
    margin: 0;
  }
`

export const InfosContainer = styled.div`
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  img {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    margin-bottom: 16px;
  }
`
export const ButtonModal = styled.button`
  text-decoration: none;
  display: block;
  padding: 4px 0;
  background-color: ${cores.begeEscuro};
  border: transparent;
  width: 100%;
  margin-top: 8px;
  color: ${cores.rosa};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  width: 218px;
  cursor: pointer;
`
