import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import AddVideo from '../AddVideo'
import Video from '../Video'
import { Container, VideoListWrapper } from './styles'

interface VideoApi{
  _id: string,
  title: string,
  link:string,
  liked:boolean
}

const VideoList = () => {
  const [videos, setVideos] = useState<VideoApi[]>([])

  useEffect(() => {
    api.get('videos').then(({ data }) => {
      setVideos(data.videos)
    })
  }, [])
  return (
    <Container data-testid="resolved">
      <VideoListWrapper>
        {videos?.map((video) => (
          <Video
          key={video._id}
          _id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
          />
        ))}
        <AddVideo/>
      </VideoListWrapper>
    </Container>
  )
}

export default VideoList
