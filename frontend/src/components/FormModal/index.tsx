import React, { FormEvent, useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'
import api from '../../services/api'
import { Overlay, Container, Header, Footer, FormContainer, FormMain, InputGroup, CheckIcon, CloseIcon } from './styles'

const FormModal = () => {
  const {
    setIsOpenModal,
    title,
    setTitle,
    link,
    setLink,
    id
  } = useContext(VideoContext)

  const handleClose = () => {
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
    setIsOpenModal(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const video = {
      title, link
    }

    if (id) {
      api.put(`videos/${id}`, video)
    } else {
      api.post('videos', video)
    }

    setIsOpenModal(false)
    if (title) {
      setTitle('')
    }
    if (link) {
      setLink('')
    }
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Adcionar a video</strong>
          <button type="button" onClick={handleClose} >
            <CloseIcon/>
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain >

            <InputGroup>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </InputGroup>

            <InputGroup>
              <label htmlFor="link">Link</label>
              <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
            </InputGroup>

          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  )
}

export default FormModal
