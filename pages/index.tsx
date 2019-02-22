import * as React from 'react'
import SampleImage from '../components/SampleImage'

function Home() {
  return (
    <div>
      <p>Welcome to next.js!</p>
      <SampleImage url='https:unsplash.it/400' width='600px' />
    </div>
  )
}

export default Home
