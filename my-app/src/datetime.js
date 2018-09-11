import React, { Component } from 'react';

class DateTime extends Component {
  state = {
selectedDate : null
  }
  handleChange = (e) => {
          e.preventDefault();
    this.setState({
      selectedDate : e.target[0].valueAsDate
    });
    console.log(this.state.selectedDate);
  }
  render() {

    return (
      <div className="dateTime">
<div className="row">
<div className="container">
<h4>Select Your Service</h4>
    <form className="form-group" onSubmit={this.handleChange}>
<input type="date" className="form-control form-control-lg" name="date"/>
<button type="submit" className="btn btn-primary btn-lg btn-block">Select Location</button>
    </form>
</div>


</div>
      </div>
    );
  }
}

export default DateTime;
