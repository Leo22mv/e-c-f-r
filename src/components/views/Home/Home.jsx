import React from 'react'
import Carousel from './Carousel'
import Favs from '../reusable/Favs/Favs'

export default function Home() {
  return (
    <>
      <Carousel />

      <div className='mt-4'>
        <Favs />
      </div>
    </>
  )
}
