import React, { Component } from 'react';

// Components
import Header from './Header';

class SelectedEvent extends Component {
  render() {
    return (
      <div className="col-8">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col">
            Manager Content
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedEvent;
