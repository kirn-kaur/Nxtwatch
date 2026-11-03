import {useContext} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'
import PageLayout from '../../components/PageLayout'
import {
  StatusContainer,
  StatusImage,
  StatusHeading,
  StatusText,
} from '../../components/FetchViews/styledComponents'

const NOT_FOUND_LIGHT =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const NOT_FOUND_DARK =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)

  return (
    <PageLayout testid="notFound">
      <StatusContainer>
        <StatusImage
          src={isDarkTheme ? NOT_FOUND_DARK : NOT_FOUND_LIGHT}
          alt="not found"
        />
        <StatusHeading isDarkTheme={isDarkTheme}>Page Not Found</StatusHeading>
        <StatusText isDarkTheme={isDarkTheme}>
          We are sorry, the page you requested could not be found.
        </StatusText>
      </StatusContainer>
    </PageLayout>
  )
}

export default NotFound
