import {useContext} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarContainer,
  NavList,
  NavItem,
  IconWrapper,
  ContactContainer,
  ContactHeading,
  SocialRow,
  SocialLogo,
  ContactText,
} from './styledComponents'

const tabs = [
  {id: 'HOME', path: '/', text: 'Home', Icon: AiFillHome},
  {id: 'TRENDING', path: '/trending', text: 'Trending', Icon: HiFire},
  {id: 'GAMING', path: '/gaming', text: 'Gaming', Icon: SiYoutubegaming},
  {
    id: 'SAVED',
    path: '/saved-videos',
    text: 'Saved videos',
    Icon: MdPlaylistAdd,
  },
]

const Sidebar = props => {
  const {location, inMenu} = props
  const {isDarkTheme} = useContext(NxtWatchContext)

  return (
    <SidebarContainer isDarkTheme={isDarkTheme} inMenu={inMenu}>
      <NavList>
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path
          return (
            <NavItem key={tab.id} isActive={isActive} isDarkTheme={isDarkTheme}>
              <Link to={tab.path}>
                <IconWrapper isActive={isActive}>
                  <tab.Icon />
                </IconWrapper>
                {tab.text}
              </Link>
            </NavItem>
          )
        })}
      </NavList>
      <ContactContainer>
        <ContactHeading isDarkTheme={isDarkTheme}>CONTACT US</ContactHeading>
        <SocialRow>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialRow>
        <ContactText isDarkTheme={isDarkTheme}>
          Enjoy! Now to see your channels and recommendations!
        </ContactText>
      </ContactContainer>
    </SidebarContainer>
  )
}

export default withRouter(Sidebar)
