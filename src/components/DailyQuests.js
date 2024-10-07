import React from 'react'
import MySVG from '../images/2b5a211d830a24fab92e291d50f65d1d.svg'
import MySVboxG from '../images/df7eda7cc1cc833ba30cd1e82781b68f.svg'
const DailyQuests = () => {
  return (
    <div className='container border border-2 border-dark rounded-4 p-3 m-2 w-75'>
        <div className='d-flex justify-content-between'>
            <h5>Daily Quests</h5>
             <h5>View All</h5>

        </div>
      
       <div className="d-flex mt-3 mb-3">
        <div className="w-25">
          <img src={MySVG} alt="" srcset="" />
        </div>
        <div className="text-wrap text-start text_Inside_right_div w-75">
        Earn 10 XP

        <div className='scorebar'>
          <span className='col-12 text-secondary text-center ' style={{marginTop:'-3px',marginRight:'-5px'}}>0/10</span>
   <img className='d-flex align-self-end' src={MySVboxG} alt="" />
         
        </div>
        </div>
      </div>
    </div>
  )
}

export default DailyQuests