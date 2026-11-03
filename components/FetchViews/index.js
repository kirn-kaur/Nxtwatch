import {useContext} from 'react'
import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoaderContainer,
  StatusContainer,
  StatusImage,
  StatusHeading,
  StatusText,
  RetryButton,
} from './styledComponents'

const FAILURE_LIGHT =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const FAILURE_DARK =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

export const LoaderView = () => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  return (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#212121'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )
}

export const FailureView = ({onRetry}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  return (
    <StatusContainer>
      <StatusImage
        src={isDarkTheme ? FAILURE_DARK : FAILURE_LIGHT}
        alt="failure view"
      />
      <StatusHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </StatusHeading>
      <StatusText isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </StatusText>
      <RetryButton type="button" onClick={onRetry}>
        Retry
      </RetryButton>
    </StatusContainer>
  )
}
