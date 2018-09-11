import React, { Component } from 'react';


class Location extends Component {

  render() {
    const {locations} = this.props;
    const locationList = locations.map(location => {
      return(

        <div className="row" key={location.id}>
        <div className="col-md-8 col-sm-12 col-xs-12">
        <h5>{location.place}</h5>
        <span>Opens: {location.open}, Closes: {location.close}</span>
        </div>

        <div className="col-md-4 col-sm-12 col-xs-12">
        <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Select Time</button>

        </div>
        <hr/>
        </div>


      )
    })
    return (

      <div className="location-list">
        <ul className="list-group">
          <li className="list-group-item">
      {locationList}
            </li>
        </ul>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
