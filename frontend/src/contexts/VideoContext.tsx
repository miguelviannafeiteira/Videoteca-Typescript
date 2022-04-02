import React, { createContext, ReactNode, useState } from 'react'
import FormModal from '../components/FormModal'

interface VideoContextType {
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) =>void,
  formTitle: string,
  formLink: string,
  setFormTitle: (newState: string) => void,
  setFormLink: (newState: string) => void,
}

interface VideoContextProps {
  children: ReactNode
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  formTitle: '',
  formLink: '',
  setFormTitle: () => {},
  setFormLink: () => {}
}

export const VideoContext = createContext<VideoContextType>(initialValue)

export const VideoContextProvider = ({ children }:VideoContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [formTitle, setFormTitle] = useState(initialValue.formTitle)
  const [formLink, setFormLink] = useState(initialValue.formLink)

  return (
    <VideoContext.Provider value={{
      isOpenModal,
      setIsOpenModal,
      formTitle,
      setFormTitle,
      formLink,
      setFormLink
    }}>
    {children}
    {isOpenModal && <FormModal/>}
    </VideoContext.Provider>

  )
}
