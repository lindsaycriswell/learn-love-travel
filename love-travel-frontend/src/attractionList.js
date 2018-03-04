import React from "react";



class AttractionList extends React.Component {
  state = {};
  render() {
    console.log(this.props.data.attractions);
    return (
      <div className="ui relaxed divided list">
        <h4>{this.props.cityName}</h4>
        <button>See City Info</button>
        <button>Add To My Trips</button>
        {this.props.data.attractions.map(attraction => (
          <div className="item">
            <img alt={attraction.name} src={attraction.image_url} className="ui left aligned mini image"/>
            <div className="content">
              <div className="description">{attraction.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AttractionList;


// style={{height: "20px", width: "20px"}}
