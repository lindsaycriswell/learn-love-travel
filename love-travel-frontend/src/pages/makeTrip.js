
// react stuff
import React from 'react'
import { DateRangePicker } from 'react-dates';

//components
// import TripForm from './tripForm'

class MakeTrip extends React.Component {

state = {
  startDate: null,
  endDate: null,
  focusedInput: null
}

makeTrip = (event) => {
  event.preventDefault()
  this.postTrip(this.state.startDate, this.state.endDate, this.props.currentCity, this.props.currentUser)
}

postTrip = (start, end, city, user) => {
  fetch('http://localhost:3000/make_trip')
}

  render(){
    console.log(this.props.currentCity.name)
    console.log(this.props.currentUser.username)
    return(
      <div>
        <h1>Let's go to {this.props.currentCity.name}</h1>
        <h4>Select Dates</h4>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="startDate"
          endDate={this.state.endDate}
          endDateId="endDate"
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      <form className="ui form" onSubmit={this.makeTrip}>
      <textarea placeholder="Trip Notes"></textarea>
      <button className="ui submit button">Let's go to {this.props.currentCity.name}</button>
      </form>
      </div>
    )
  }
}

export default MakeTrip
