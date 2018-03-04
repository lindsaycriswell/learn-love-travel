
import React from 'react'

const Welcome = (props) => {
  return(
    <div>
      <p>Hey {props.currentUser.username}!</p>
      <p>Get to exploring and stuff like that whatever.</p>
    </div>
  )
}

export default Welcome
