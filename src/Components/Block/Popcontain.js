import React from 'react'
import './Popcontain.css'
import Banner from '../Card/Banner'
import Card from '../Card/Card'
import Index from '../Card/Index'

export default function Popcontain() {
  return (
    <div className='Popcontain-parent'>
      <div className='banner'>
        <Banner/>
        </div>
        <div className='Phone-catalog'>
            <Index/>
        </div>
    </div>
  )
}
