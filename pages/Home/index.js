import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import PageLayout from '../../components/PageLayout'
import VideoCard from '../../components/VideoCard'
import {LoaderView, FailureView} from '../../components/FetchViews'
import {
  StatusContainer,
  StatusImage,
  StatusHeading,
  StatusText,
  RetryButton,
} from '../../components/FetchViews/styledComponents'
import {apiStatusConstants, getAuthOptions, formatVideo} from '../../utils'
import {
  Banner,
  BannerLeft,
  BannerLogo,
  BannerText,
  GetItButton,
  CloseButton,
  HomeContent,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosGrid,
} from './styledComponents'

class Home extends Component {
  static contextType = NxtWatchContext

  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${encodeURIComponent(
      searchInput,
    )}`
    try {
      const response = await fetch(url, getAuthOptions())
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

  onChangeSearch = event => this.setState({searchInput: event.target.value})

  onKeyDownSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onCloseBanner = () => this.setState({showBanner: false})

  renderBanner = () => (
    <Banner data-testid="banner">
      <BannerLeft>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItButton type="button">GET IT NOW</GetItButton>
      </BannerLeft>
      <CloseButton type="button" data-testid="close" onClick={this.onCloseBanner}>
        <AiOutlineClose />
      </CloseButton>
    </Banner>
  )

  renderNoVideos = () => {
    const {isDarkTheme} = this.context
    return (
      <StatusContainer>
        <StatusImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <StatusHeading isDarkTheme={isDarkTheme}>
          No Search results found
        </StatusHeading>
        <StatusText isDarkTheme={isDarkTheme}>
          Try different key words or remove search filter
        </StatusText>
        <RetryButton type="button" onClick={this.getVideos}>
          Retry
        </RetryButton>
      </StatusContainer>
    )
  }

  renderVideos = () => {
    const {videos} = this.state
    if (videos.length === 0) {
      return this.renderNoVideos()
    }
    return (
      <VideosGrid>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} layout="grid" />
        ))}
      </VideosGrid>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return <FailureView onRetry={this.getVideos} />
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.context
    const {searchInput, showBanner} = this.state

    return (
      <PageLayout testid="home" isHome>
        {showBanner && this.renderBanner()}
        <HomeContent>
          <SearchContainer isDarkTheme={isDarkTheme}>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearch}
              onKeyDown={this.onKeyDownSearch}
              isDarkTheme={isDarkTheme}
            />
            <SearchButton
              type="button"
              data-testid="searchButton"
              onClick={this.getVideos}
              isDarkTheme={isDarkTheme}
            >
              <AiOutlineSearch />
            </SearchButton>
          </SearchContainer>
          {this.renderContent()}
        </HomeContent>
      </PageLayout>
    )
  }
}

export default Home
