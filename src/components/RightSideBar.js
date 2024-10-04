import React from 'react'
import Unlock_Leaderboards from './Unlock_Leaderboards'
import DailyQuests from './DailyQuests'
import CreateProfile from './CreateProfile'
import Small_Right_Bottom_Navbar from './Small_Right_Bottom_Navbar'
import Small_Right_Top_details from './Small_Right_Top_details'

const RightSideBar = () => {
  return (
    <div className='h-100 position-sticky top-0 end-0'>
      <Small_Right_Top_details/>
      <Unlock_Leaderboards/>
      <DailyQuests/>
      <CreateProfile/>
      <Small_Right_Bottom_Navbar/>
    </div>
  )
}

export default RightSideBar