import React from 'react'
import Unlock_Leaderboards from './UnlockLeaderboards'
import DailyQuests from './DailyQuests'
import CreateProfile from './CreateProfile'
import SmallRightBottomNavbar from './SmallRightBottomNavbar'
import SmallRightTopDetails from './SmallRightTopDetails'

const RightSideBar = () => {
  return (
    <div className='h-100 position-sticky top-0 end-0'>
      <SmallRightTopDetails/>
      <Unlock_Leaderboards/>
      <DailyQuests/>
      <CreateProfile/>
      <SmallRightBottomNavbar/>
    </div>
  )
}

export default RightSideBar