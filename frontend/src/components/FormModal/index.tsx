import React, { FormEvent, useContext } from 'react'
import { VideoContext } from '../../contexts/VideoContext'
import { Overlay, Container, Header, Footer, FormContainer, FormMain, InputGroup, CheckIcon, CloseIcon } from './styles'

const FormModal = () => {
  const {
    setIsOpenModal, formTitle,
    setFormTitle,
    formLink,
    setFormLink
  } = useContext(VideoContext)

  const handleClose = () => {
    setIsOpenModal(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    window.location.reload()
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
        <FormContainer >
          <FormMain onSubmit={handleSubmit}>

            <InputGroup>
              <label htmlFor="title">Title</label>
              <input id="title" type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
            </InputGroup>

            <InputGroup>
              <label htmlFor="link">Link</label>
              <input id="link" type="text" value={formLink} onChange={(e) => setFormLink(e.target.value)}/>
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
