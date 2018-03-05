
// react stuff
import React from 'react'
import { DateRangePicker } from 'react-dates';
import { Redirect } from 'react-router'

//components
// import TripForm from './tripForm'

class MakeTrip extends React.Component {

state = {
  startDate: null,
  endDate: null,
  focusedInput: null,
  notes: '',
  redirect: false
}

makeTrip = (event) => {
  event.preventDefault()
  this.postTrip(this.state.startDate, this.state.endDate, this.props.currentCity, this.props.currentUser, this.state.notes)
}

handleNotes = (event) => {
  this.setState({
    notes: event.target.value
  })
}

postTrip = (start, end, city, user, notes) => {
  fetch(`http://localhost:3000/users/${user.id}/maketrip`, {
    method: "POST",
    headers: {
       "Content-Type": "application/json"
    },
    body: JSON.stringify({
      start_date: start,
      end_date: end,
      location_id: city.id,
      user_id: user.id,
      notes: notes
    })
  })
  .then(res => res.json())
  .then(json => {
    this.setState({
      redirect: true
    })
  })
}

  // {this.state.redirect ?  <Redirect to='/yourTrips'/> : null}
  render(){
    return(
      <div>
        {this.state.redirect ? <Redirect to='/yourTrips'/> : null}
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
      <textarea placeholder="Trip Notes" value={this.state.notes} onInput={this.handleNotes}></textarea>
      <button className="ui submit button">Let's go to {this.props.currentCity.name}</button>
      </form>
      </div>
    )
  }
}

export default MakeTrip
