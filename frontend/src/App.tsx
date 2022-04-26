import React from 'react'
import Layout from './components/Layout'
import { VideoContextProvider } from './contexts/VideoContext'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
      <VideoContextProvider>
        <GlobalStyles />
        <Layout />
      </VideoContextProvider>
    </>
  )
}

export default App
