import {useContext} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import 'reactjs-popup/dist/index.css'

import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import {
  NavHeader,
  LogoLink,
  WebsiteLogo,
  ActionsContainer,
  IconButton,
  MobileOnly,
  DesktopOnly,
  ProfileImage,
  LogoutButton,
  PopupCard,
  PopupText,
  PopupButtons,
  CancelButton,
  ConfirmButton,
  MenuCard,
  MenuClose,
} from './styledComponents'

const LIGHT_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const DARK_LOGO =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => {
  const {isDarkTheme, toggleTheme} = useContext(NxtWatchContext)

  const onConfirmLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderLogoutPopup = trigger => (
    <Popup modal trigger={trigger} className="popup-content">
      {close => (
        <PopupCard isDarkTheme={isDarkTheme}>
          <PopupText>Are you sure, you want to logout</PopupText>
          <PopupButtons>
            <CancelButton type="button" onClick={() => close()}>
              Cancel
            </CancelButton>
            <ConfirmButton type="button" onClick={onConfirmLogout}>
              Confirm
            </ConfirmButton>
          </PopupButtons>
        </PopupCard>
      )}
    </Popup>
  )

  return (
    <NavHeader isDarkTheme={isDarkTheme}>
      <LogoLink to="/">
        <WebsiteLogo
          src={isDarkTheme ? DARK_LOGO : LIGHT_LOGO}
          alt="website logo"
        />
      </LogoLink>

      <ActionsContainer>
        <IconButton
          type="button"
          data-testid="theme"
          isDarkTheme={isDarkTheme}
          onClick={toggleTheme}
        >
          {isDarkTheme ? <BsBrightnessHigh /> : <FaMoon />}
        </IconButton>

        <MobileOnly>
          <Popup
            modal
            className="popup-content"
            trigger={
              <IconButton type="button" isDarkTheme={isDarkTheme}>
                <GiHamburgerMenu />
              </IconButton>
            }
          >
            {close => (
              <MenuCard isDarkTheme={isDarkTheme}>
                <MenuClose
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={() => close()}
                >
                  <AiOutlineClose />
                </MenuClose>
                <Sidebar inMenu />
              </MenuCard>
            )}
          </Popup>
          {renderLogoutPopup(
            <IconButton type="button" isDarkTheme={isDarkTheme}>
              <FiLogOut />
            </IconButton>,
          )}
        </MobileOnly>

        <DesktopOnly>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          {renderLogoutPopup(
            <LogoutButton type="button" isDarkTheme={isDarkTheme}>
              Logout
            </LogoutButton>,
          )}
        </DesktopOnly>
      </ActionsContainer>
    </NavHeader>
  )
}

export default withRouter(Header)
