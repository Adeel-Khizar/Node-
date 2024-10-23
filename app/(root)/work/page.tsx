import Testimonials from '@/components/Testimonials'
import Banner from '@/components/work/Banner'
import { PorjectCards } from '@/components/work/ProjectCard'
import { CursorProvider } from '@/hooks/CursorContext'
import React from 'react'

const work = () => {
  return (
    <div>
      <Banner/>    
      <PorjectCards/>   
    </div>
  )
}

export default work