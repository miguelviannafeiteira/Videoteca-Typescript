import React, { createContext, ReactNode, useState } from 'react'
import FormModal from '../components/FormModal'

interface VideoContextType {
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) =>void,
  title: string,
  link: string,
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
  setLink: () => {}
}

export const VideoContext = createContext<VideoContextType>(initialValue)

export const VideoContextProvider = ({ children }:VideoContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [title, setTitle] = useState(initialValue.title)
  const [link, setLink] = useState(initialValue.link)

  return (
    <VideoContext.Provider value={{
      isOpenModal,
      setIsOpenModal,
      title,
      setTitle,
      link,
      setLink
    }}>
    {children}
    {isOpenModal && <FormModal/>}
    </VideoContext.Provider>

  )
}
