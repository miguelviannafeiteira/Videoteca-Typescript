import React from 'react'
import AddVideo from '../AddVideo'
import { Container, VideoListWrapper } from './styles'

const VideoList = () => {
  return (
    <Container>
      <VideoListWrapper>
        <AddVideo/>
      </VideoListWrapper>
    </Container>
  )
}

export default VideoList
