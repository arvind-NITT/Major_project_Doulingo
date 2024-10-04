import React from 'react'

const CreateProfile = () => {
  return (
    <div className='ontainer border border-2 border-dark rounded-4 p-3 m-2 w-75'>
        <div className='d-flex justify-content-evenly text_Inside_right_div'>
            <h5>Create a profile to save your progress!</h5>
        

        </div>
        <div class="d-grid gap-2">
  <button class="btn mehandi_button" type="button">Create a profile</button>
  <button class="btn light_blue_button" type="button">Sign In</button>
</div>
    </div>
  )
}

export default CreateProfile