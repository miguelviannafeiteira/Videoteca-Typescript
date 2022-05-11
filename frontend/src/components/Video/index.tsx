import React, { useContext } from 'react'
import { Button, ButtonArea, ButtonLiked, Container } from './styles'
import { IoThumbsUp, IoPencil, IoTrashBin } from 'react-icons/io5'
import { VideoContext } from '../../contexts/VideoContext'
import api from '../../services/api'

interface VideoApi{
  _id: string,
  title: string,
  link:string,
  liked:boolean
}

const Video :React.FC<VideoApi> = ({ _id, title, link, liked }:VideoApi) => {
  const {
    setIsOpenModal,
    setTitle,
    setLink,
    setId
  } = useContext(VideoContext)

  const handleEdit = (videoId:string, videoTitle:string, videoLink:string) => {
    setTitle(videoTitle)
    setLink(videoLink)
    setId(videoId)

    setIsOpenModal(true)
  }
  const handleLike = (id:string) => {
    api.patch(`videos/${id}`)
  }
  const handleDelete = (id:string) => {
    api.delete(`videos/${id}`)
  }

  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="_blank" rel="noreferrer" >{link}</a>
        <ButtonArea>
        <ButtonLiked data-testid="likeButton" liked={liked} onClick={() => handleLike(_id)}>
          {liked ? 'liked' : 'unliked'}
            <IoThumbsUp/>
          </ButtonLiked>

          <Button onClick={() => handleEdit(_id, title, link)}>
            <IoPencil/>
          </Button>

          <Button onClick={() => handleDelete(_id)}>
            <IoTrashBin/>
          </Button>
        </ButtonArea>
      </Container>
    </li>
  )
}

export default Video
