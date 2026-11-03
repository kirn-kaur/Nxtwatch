import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import PageLayout from '../../components/PageLayout'
import {LoaderView, FailureView} from '../../components/FetchViews'
import {apiStatusConstants, getAuthOptions, formatVideo} from '../../utils'
import {
  DetailsContainer,
  PlayerWrapper,
  VideoTitle,
  StatsRow,
  ViewsText,
  ActionsRow,
  ActionButton,
  ButtonIcon,
  Divider,
  ChannelRow,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

class VideoDetails extends Component {
  static contextType = NxtWatchContext

  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/${id}`,
        getAuthOptions(),
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({
          videoDetails: formatVideo(data.video_details),
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () =>
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))

  onClickDislike = () =>
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))

  renderVideo = () => {
    const {isDarkTheme, savedVideos, toggleSaveVideo} = this.context
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails

    const isSaved = savedVideos.some(video => video.id === id)
    const publishedText = publishedAt
      ? `${formatDistanceToNow(new Date(publishedAt))} ago`
      : ''

    return (
      <DetailsContainer>
        <PlayerWrapper>
          <ReactPlayer url={videoUrl} controls width="100%" />
        </PlayerWrapper>
        <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
        <StatsRow>
          <ViewsText isDarkTheme={isDarkTheme}>
            {viewCount} views • {publishedText}
          </ViewsText>
          <ActionsRow>
            <ActionButton
              type="button"
              isActive={isLiked}
              onClick={this.onClickLike}
            >
              <ButtonIcon>
                <AiOutlineLike />
              </ButtonIcon>
              Like
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isDisliked}
              onClick={this.onClickDislike}
            >
              <ButtonIcon>
                <AiOutlineDislike />
              </ButtonIcon>
              Dislike
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isSaved}
              onClick={() => toggleSaveVideo(videoDetails)}
            >
              <ButtonIcon>
                <MdPlaylistAdd />
              </ButtonIcon>
              {isSaved ? 'Saved' : 'Save'}
            </ActionButton>
          </ActionsRow>
        </StatsRow>
        <Divider isDarkTheme={isDarkTheme} />
        <ChannelRow>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <ChannelInfo>
            <ChannelName isDarkTheme={isDarkTheme}>{channel.name}</ChannelName>
            <Subscribers isDarkTheme={isDarkTheme}>
              {channel.subscriberCount} Subscribers
            </Subscribers>
            <Description isDarkTheme={isDarkTheme}>{description}</Description>
          </ChannelInfo>
        </ChannelRow>
      </DetailsContainer>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderVideo()
      case apiStatusConstants.failure:
        return <FailureView onRetry={this.getVideoDetails} />
      default:
        return null
    }
  }

  render() {
    return (
      <PageLayout testid="videoItemDetails">{this.renderContent()}</PageLayout>
    )
  }
}

export default VideoDetails
