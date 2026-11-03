import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 140px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-left: 16px;
  padding: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`

export const MobileOnly = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopOnly = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 24px;
`

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 2px;
  cursor: pointer;
`

export const PopupCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  padding: 28px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  max-width: 360px;
`

export const PopupText = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0 0 24px 0;
`

export const PopupButtons = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  background: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  padding: 8px 20px;
  margin-right: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
`

export const MenuCard = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  display: flex;
  flex-direction: column;
`

export const MenuClose = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 22px;
  margin: 16px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
