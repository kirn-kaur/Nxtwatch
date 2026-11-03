import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import PageLayout, {PageTitleBanner} from '../../components/PageLayout'
import {PageContent} from '../../components/PageLayout/styledComponents'
import {LoaderView, FailureView} from '../../components/FetchViews'
import {apiStatusConstants, getAuthOptions, formatVideo} from '../../utils'
import {
  GamingGrid,
  GameItem,
  GameLink,
  GameThumbnail,
  GameTitle,
  GameViews,
} from './styledComponents'

class Gaming extends Component {
  static contextType = NxtWatchContext

  state = {apiStatus: apiStatusConstants.initial, videos: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const response = await fetch(
        'https://apis.ccbp.in/videos/gaming',
        getAuthOptions(),
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videos: data.videos.map(formatVideo),
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderContent = () => {
    const {isDarkTheme} = this.context
    const {apiStatus, videos} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return (
          <GamingGrid>
            {videos.map(video => (
              <GameItem key={video.id}>
                <GameLink to={`/videos/${video.id}`}>
                  <GameThumbnail
                    src={video.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <GameTitle isDarkTheme={isDarkTheme}>{video.title}</GameTitle>
                  <GameViews isDarkTheme={isDarkTheme}>
                    {video.viewCount} Watching Worldwide
                  </GameViews>
                </GameLink>
              </GameItem>
            ))}
          </GamingGrid>
        )
      case apiStatusConstants.failure:
        return <FailureView onRetry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <PageLayout testid="gaming">
        <PageTitleBanner icon={<SiYoutubegaming />} title="Gaming" />
        <PageContent>{this.renderContent()}</PageContent>
      </PageLayout>
    )
  }
}

export default Gaming
