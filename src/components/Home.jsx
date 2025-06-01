import React from 'react'
import Navbar from './Navbar'
import Popular from './Popular'
import Trending from './Trending'

const Home = () => {
  return (
    <>
    <div className="main">
      <Navbar />
      <Popular />
      <Trending />
    </div>
    </>
  )
}

export default Home
