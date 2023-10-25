"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '../../../variants'
import SectionHeader from '../events/SectionHeader'
import Albumslider from './Albumslider'
const Albums = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <SectionHeader pretitle={"Discography"} title={"Popular Albums"}/>
            <Albumslider/>
        </div>
    </div>
  )
}

export default Albums