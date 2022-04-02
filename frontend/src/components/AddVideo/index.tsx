import React, { useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'
import { AddIcon, AddVideoButton } from './styles'

const AddVideo = () => {
  const { setIsOpenModal } = useContext(VideoContext)

  const handleAdd = () => {
    setIsOpenModal(true)
  }

  return (
    <li>
        <AddVideoButton type="button" onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  )
}

export default AddVideo
