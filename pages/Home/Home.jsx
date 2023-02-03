import React from 'react'

import '../../App.css'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import HomeMainbar from '../../component/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>

      </div>
    </div>
  )
}

export default Home
