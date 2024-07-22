import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.aside`
  z-index: 1;
  width: 360px;
  background-color: ${colors.pink};

  .empty-text {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const List = styled.ul`
  margin: 36px 8px 0 8px;
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  margin-top: 16px;
  padding: 8px 8px 12px 8px;
  color: ${colors.pink};
  background-color: ${colors.beige};

  div {
    margin-left: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top: 16px;
  }

  h3 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 900;
  }
`
export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Delete = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  color: ${colors.beige};
  margin-top: 40px;
  margin-bottom: 16px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  text-decoration: none;
  background-color: ${colors.beigeDark};
  color: ${colors.pink};
  cursor: pointer;
  width: 344px;
`
