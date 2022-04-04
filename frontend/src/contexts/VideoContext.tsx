import React, { createContext, ReactNode, useState } from 'react'
import FormModal from '../components/FormModal'

interface VideoContextType {
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) =>void,
  title: string,
  link: string,
  id: string,
  setId: (newState: string) => void,
  setTitle: (newState: string) => void,
  setLink: (newState: string) => void,
}

interface VideoContextProps {
  children: ReactNode
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  title: '',
  link: '',
  setTitle: () => {},
  setLink: () => {},
  id: '',
  setId: () => {}
}

export const VideoContext = createContext<VideoContextType>(initialValue)

export const VideoContextProvider = ({ children }:VideoContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [title, setTitle] = useState(initialValue.title)
  const [link, setLink] = useState(initialValue.link)
  const [id, setId] = useState(initialValue.id)

  return (
    <VideoContext.Provider value={{
      isOpenModal,
      setIsOpenModal,
      title,
      setTitle,
      link,
      setLink,
      id,
      setId
    }}>
    {children}
    {isOpenModal && <FormModal/>}
    </VideoContext.Provider>

  )
}
