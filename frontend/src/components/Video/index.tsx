import React from 'react'
import { Button, ButtonArea, Container } from './styles'
import { IoThumbsUp, IoPencil, IoTrashBin } from 'react-icons/io5'

interface VideoApi{
  _id: string,
  title: string,
  link:string,
  liked:boolean
}

const Video :React.FC<VideoApi> = ({ _id, title, link, liked }) => {
  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a href={link} target="_blank" rel="noreferrer" >{link}</a>
        <ButtonArea>
        <Button>
            <IoThumbsUp/>
          </Button>

          <Button>
            <IoPencil/>
          </Button>

          <Button>
            <IoTrashBin/>
          </Button>
        </ButtonArea>
      </Container>
    </li>
  )
}

export default Video
