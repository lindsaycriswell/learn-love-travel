
import React from "react";
import { Redirect } from 'react-router'

class AttractionList extends React.Component {
  state = {
    redirect: false
  };

  addTrip = (event) => {
    event.preventDefault()
    console.log(this.props)
    this.renderTripPage(this.props.data)
  }

  renderTripPage = (value) => {
    this.setState({
      redirect: true
    })
    this.props.setCity(value)
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{textAlign: "left"}}>
        {this.state.redirect ?  <Redirect to='/makeTrip'/> : null}
        <h4>{this.props.cityName}</h4>
        <button>See City Info</button>
        <button onClick={this.addTrip}>Add To My Trips</button>
        {this.props.data.attractions.map(attraction => (
          <div key={attraction.id} className="item">
            <img alt={attraction.name} src={attraction.image_url} className="ui left aligned mini image"/>
              <div className="middle aligned content">
                <div className="header">{attraction.name}</div>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AttractionList;


// style={{height: "20px", width: "20px"}}
