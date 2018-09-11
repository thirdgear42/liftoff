import React, { Component } from 'react';

class Pricing extends Component {
  state = {
    selectedPricing : 'default',
    errorMessage : false
  }
  handleChange = (e) => {
    this.setState({
      selectedPricing : e.target.value
    });
  }
  onselection = (e) => {
    e.preventDefault();
    if(this.state.selectedPricing === 'default'){
      this.setState({
        errorMessage : true
      });

    }else{
      this.setState({
        errorMessage : false
      });
    }
console.log(this.state.selectedPricing);
  }
  render() {

    return (
      <div className="pricing">
<div className="row">
<div className="container">
<h4>Select Your Service</h4>
    <form className="form-group" onSubmit={this.onselection}>
    <select name="services" className="form-control form-control-lg" onChange={this.handleChange}>
    <option value="default">Select Massage Type</option>
<option value="opt1">MINI - 20 Minutes</option>
<option value="opn2">MEDIUM - 40 Minutes</option>
<option value="opn3">FULL - 60 Minutes</option>
</select>
<button type="submit" className="btn btn-primary btn-lg btn-block">Select Dates</button>
    </form>
     { this.state.errorMessage ? <div className="alert alert-danger" role="alert">Select Massage Type</div> : null }
</div>


</div>
      </div>
    );
  }
}

export default Pricing;
