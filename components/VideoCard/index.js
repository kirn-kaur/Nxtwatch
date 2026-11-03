import {useContext} from 'react'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  CardItem,
  CardLink,
  Thumbnail,
  InfoContainer,
  ChannelLogo,
  TextContainer,
  Title,
  MetaText,
} from './styledComponents'

// layout: 'grid' (Home) or 'row' (Trending / Saved Videos)
const VideoCard = ({video, layout = 'grid'}) => {
  const {isDarkTheme} = useContext(NxtWatchContext)
  const {id, title, thumbnailUrl, viewCount, publishedAt, channel} = video

  const publishedText = publishedAt
    ? `${formatDistanceToNow(new Date(publishedAt))} ago`
    : ''

  return (
    <CardItem>
      <CardLink to={`/videos/${id}`} layout={layout}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" layout={layout} />
        <InfoContainer layout={layout}>
          {channel && (
            <ChannelLogo
              src={channel.profileImageUrl}
              alt="channel logo"
              layout={layout}
            />
          )}
          <TextContainer>
            <Title isDarkTheme={isDarkTheme} layout={layout}>
              {title}
            </Title>
            {channel && (
              <MetaText isDarkTheme={isDarkTheme}>{channel.name}</MetaText>
            )}
            <MetaText isDarkTheme={isDarkTheme}>
              {viewCount} views {publishedText && `• ${publishedText}`}
            </MetaText>
          </TextContainer>
        </InfoContainer>
      </CardLink>
    </CardItem>
  )
}

export default VideoCard
