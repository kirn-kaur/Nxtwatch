import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  BodyContainer,
  PageContainer,
  TitleBanner,
  TitleIconCircle,
  TitleText,
} from './styledComponents'

export const PageTitleBanner = ({icon, title}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  return (
    <TitleBanner data-testid="banner" isDarkTheme={isDarkTheme}>
      <TitleIconCircle isDarkTheme={isDarkTheme}>{icon}</TitleIconCircle>
      <TitleText isDarkTheme={isDarkTheme}>{title}</TitleText>
    </TitleBanner>
  )
}

const PageLayout = ({testid, isHome, children}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  return (
    <>
      <Header />
      <BodyContainer>
        <Sidebar />
        <PageContainer
          data-testid={testid}
          isDarkTheme={isDarkTheme}
          isHome={isHome}
        >
          {children}
        </PageContainer>
      </BodyContainer>
    </>
  )
}

export default PageLayout
