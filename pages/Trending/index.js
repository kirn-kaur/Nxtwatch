import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import PageLayout, {PageTitleBanner} from '../../components/PageLayout'
import {
  PageContent,
  VideosList,
} from '../../components/PageLayout/styledComponents'
import VideoCard from '../../components/VideoCard'
import {LoaderView, FailureView} from '../../components/FetchViews'
import {apiStatusConstants, getAuthOptions, formatVideo} from '../../utils'

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videos: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const response = await fetch(
        'https://apis.ccbp.in/videos/trending',
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
    const {apiStatus, videos} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return (
          <VideosList>
            {videos.map(video => (
              <VideoCard key={video.id} video={video} layout="row" />
            ))}
          </VideosList>
        )
      case apiStatusConstants.failure:
        return <FailureView onRetry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <PageLayout testid="trending">
        <PageTitleBanner icon={<HiFire />} title="Trending" />
        <PageContent>{this.renderContent()}</PageContent>
      </PageLayout>
    )
  }
}

export default Trending
