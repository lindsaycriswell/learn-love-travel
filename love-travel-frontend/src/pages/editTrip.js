
// react stuff
import React from 'react'
import { DateRangePicker } from 'react-dates';
import withAuth from '../hoc/withAuth'

// require this after components
let moment = require('moment');

class EditTrip extends React.Component {

  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
    notes: ''
  }

  componentDidMount(){
    this.setState({
      startDate: moment(this.props.data.start_date),
      endDate: moment(this.props.data.end_date),
      notes: this.props.data.notes
    })
  }

  handleNotes = (event) => {
    this.setState({
      notes: event.target.value
    })
  }

  handleEdit = (event) => {
    event.preventDefault()
    this.patchTrip(this.state.startDate, this.state.endDate, this.props.user.id, this.props.data.id, this.state.notes)
  }

  patchTrip = (start, end, userID, tripID, notes) => {
    fetch(`http://localhost:3000/users/${userID}/trips/${tripID}`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
        start_date: start,
        end_date: end,
        notes: notes,
      })
    })
    .then(res => res.json())
    .then(json => this.props.resetState())
  }

  deleteTrip = (userID, tripID) => {
    fetch(`http://localhost:3000/users/${userID}/trips/${tripID}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(json => this.props.resetState())
  }

  render(){
    return(
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="startDate"
          endDate={this.state.endDate}
          endDateId="endDate"
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
        <form className="ui form" onSubmit={this.handleEdit}>
          <textarea placeholder="Trip Notes" value={this.state.notes} onInput={this.handleNotes}></textarea>
          <button className="ui submit button">Edit Trip</button>
        </form><br/>
      <a onClick={()=> this.deleteTrip(this.props.user.id, this.props.data.id)}>Cancel Trip</a>
      </div>
    )
  }
}

export default EditTrip
