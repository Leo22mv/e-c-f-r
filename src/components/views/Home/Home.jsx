import React from 'react'
import Carousel from './Carousel'
import Favs from '../reusable/Favs/Favs'
import Recommended from '../reusable/Recommended/Recommended'

export default function Home() {
  return (
    <>
      <Carousel />

      <div className='mt-4'>
        <Favs />
      </div>

      <div className='mt-4'>
        <Recommended />
      </div>
    </>
  )
}
