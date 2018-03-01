

import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
        <Link to={`/mainPage`} > a link </Link>
      </div>
    )
  }
}

export default Home
