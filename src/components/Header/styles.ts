import styled from 'styled-components'
import background from '../../assets/imagens/banner.png'

import { breakpoints, Container, colors } from '../../styles'
import { Props } from '.'

type Title = {
  category?: boolean
}

export const HeaderR = styled.header<Props>`
  width: 100%;
  height: ${(props) => (props.home ? '328px' : '186px')};
  background: url(${background});

  ${Container} {
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: ${(props) => (props.home ? 'column' : 'row')};
    justify-content: space-between;

    img {
      width: 125px;
      margin-top: ${(props) => (props.home ? '50px' : '0')};
      height: 57.5px;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100px;
        height: 50.5px;
      }
    }
  }
`

export const HeaderTitle = styled.h2`
  width: 539px;
  height: 84px;
  margin-bottom: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${colors.pink};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 28px;
    max-width: 90%;
  }
`
export const HeaderPerfil = styled.h3`
  height: 21px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.pink};
  max-width: 1024px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const ImageContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
  }

  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const RestaurantTitle = styled.h2<Title>`
  height: 33.25px;
  z-index: 1;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${(props) => (props.category ? '100' : '900')};
  font-size: 32px;
  line-height: 38px;
  color: ${colors.white};
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 1024px;
`
