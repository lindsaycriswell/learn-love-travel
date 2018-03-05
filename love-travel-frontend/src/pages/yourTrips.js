
// React stuff needed
import React from 'react'
let moment = require('moment');

//components
import EditTrip from './editTrip'


class YourTrips extends React.Component  {
  state = {
    yourTrips: [],
    editTrip: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}/your_trips`)
    .then(res => res.json())
    .then(yourTripsJSON => {
      this.setState({
        yourTrips: yourTripsJSON
      })
    })
  }

  handleEditClick = (cityInfo) => {
    this.setState({
      editTrip: cityInfo
    })
  }

  render() {
    //need to sort by most recent first
  console.log(this.state.yourTrips)
    return(
      <div className="ui grid" style={{paddingTop: "30px"}}>
        <div className="three wide column"></div>
        <div className="four wide column">
      <div className="ui items">
          {this.state.yourTrips.length > 0 ? this.state.yourTrips.map(trip =>
            <div key={trip.id} className="item">
              <div className="content">
                <div className="ui header">{trip.location.name}</div>
                <div className="description">{moment(trip.start_date).format("MMM Do")} <i className="arrow right icon"></i> {moment(trip.end_date).format("MMM Do YY")}</div>
                <div>{trip.notes.length > 0 ? trip.notes : "Add Some Notes!" }</div>
                <button className="tiny green ui button" onClick={() => this.handleEditClick(trip)}>Edit Trip</button>
              </div>
            </div>) : <div className="ui header" style={{paddingTop: "40px"}}> No Trips Yet! </div> }
          </div>
          </div>
          <div className="nine wide column">
          {this.state.editTrip ? <EditTrip data={this.state.editTrip} />: null }</div>
      </div>
    )}

}

export default YourTrips
