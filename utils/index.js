import Cookies from 'js-cookie'

export const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

export const getAuthOptions = () => ({
  method: 'GET',
  headers: {
    Authorization: `Bearer ${Cookies.get('jwt_token')}`,
  },
})

export const formatVideo = video => ({
  id: video.id,
  title: video.title,
  thumbnailUrl: video.thumbnail_url,
  viewCount: video.view_count,
  publishedAt: video.published_at,
  channel: video.channel
    ? {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        subscriberCount: video.channel.subscriber_count,
      }
    : undefined,
  videoUrl: video.video_url,
  description: video.description,
})
