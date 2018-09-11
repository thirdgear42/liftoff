import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  state ={
    showPackage : false
  }
  showPackage = (e) => {
    if(this.state.showPackage === false){
      this.setState({ showPackage: true });
      console.log(this.state.showPackage);
    }else{
      this.setState({ showPackage: false });
      console.log(this.state.showPackage);
    }


    }
  render() {
    return (
      <div>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading">ReactJS Based</h1>
            <h2 className="masthead-subheading">Massage Booking Website</h2>
            <a className="btn btn-home btn-xl" onClick={this.showPackage}>Book A Massage</a>
          </div>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
