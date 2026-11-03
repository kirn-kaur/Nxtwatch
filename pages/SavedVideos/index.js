import {useContext} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import PageLayout, {PageTitleBanner} from '../../components/PageLayout'
import {
  PageContent,
  VideosList,
} from '../../components/PageLayout/styledComponents'
import VideoCard from '../../components/VideoCard'
import {
  StatusContainer,
  StatusImage,
  StatusHeading,
  StatusText,
} from '../../components/FetchViews/styledComponents'

const SavedVideos = () => {
  const {isDarkTheme, savedVideos} = useContext(NxtWatchContext)

  return (
    <PageLayout testid="savedVideos">
      {savedVideos.length === 0 ? (
        <StatusContainer>
          <StatusImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <StatusHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </StatusHeading>
          <StatusText isDarkTheme={isDarkTheme}>
            You can save your videos while watching them
          </StatusText>
        </StatusContainer>
      ) : (
        <>
          <PageTitleBanner icon={<MdPlaylistAdd />} title="Saved Videos" />
          <PageContent>
            <VideosList>
              {savedVideos.map(video => (
                <VideoCard key={video.id} video={video} layout="row" />
              ))}
            </VideosList>
          </PageContent>
        </>
      )}
    </PageLayout>
  )
}

export default SavedVideos
