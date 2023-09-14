import React, { ReactElement } from 'react'
import Header from './header/Header'
import Bottomheader from './header/Bottomheader'
import Footer from './Footer'

interface Props{
    children:ReactElement
}

const Rootlayout = ({children}: Props) => {
  return (
    <>
    <Header/>
    <Bottomheader/>
    {children}
    <Footer/>
    </>
  )
}

export default Rootlayout