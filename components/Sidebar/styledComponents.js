import styled from 'styled-components'

export const SidebarContainer = styled.nav`
  display: ${props => (props.inMenu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  width: ${props => (props.inMenu ? '100%' : '240px')};
  min-width: ${props => (props.inMenu ? '0' : '240px')};
  height: ${props => (props.inMenu ? 'auto' : 'calc(100vh - 70px)')};
  min-height: ${props => (props.inMenu ? '60vh' : '0')};
  position: ${props => (props.inMenu ? 'static' : 'sticky')};
  top: 70px;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  background-color: ${props => {
    if (!props.isActive) return 'transparent'
    return props.isDarkTheme ? '#424242' : '#e2e8f0'
  }};

  a {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    text-decoration: none;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
    font-weight: ${props => (props.isActive ? '700' : '400')};
  }
`

export const IconWrapper = styled.span`
  display: flex;
  font-size: 18px;
  margin-right: 18px;
  color: ${props => (props.isActive ? '#ff0b37' : '#909090')};
`

export const ContactContainer = styled.div`
  padding: 20px 24px;
`

export const ContactHeading = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
`

export const SocialLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`

export const ContactText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
